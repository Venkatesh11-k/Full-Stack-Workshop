#!/bin/bash

# 1️⃣ Check source folder
if [ -z "$1" ]; then
    echo "Please give source folder"
    exit 1
fi

# 2️⃣ Check backup destination folder
if [ -z "$2" ]; then
    echo "Please give backup destination folder"
    exit 1
fi

SOURCE=$1
DEST=$2

# 3️⃣ Create destination folder if not exists
mkdir -p "$DEST"

# 4️⃣ Create timestamp
TIME=$(date +"%Y%m%d-%H%M%S")

# 5️⃣ Backup file name
BACKUP_FILE="$DEST/backup-$TIME.tar.gz"

# 6️⃣ Create compressed backup
tar -czf "$BACKUP_FILE" "$SOURCE"

# 7️⃣ Show backup size
SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
echo "Backup created: $BACKUP_FILE"
echo "Backup size: $SIZE"

# 8️⃣ Keep only last 5 backups
cd "$DEST" || exit
ls -t backup-*.tar.gz | tail -n +6 | xargs rm -f 2>/dev/null
