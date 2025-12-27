#!/bin/bash

# 1️⃣ Check if folder path is given
if [ -z "$1" ]; then
    echo "Please give a folder path"
    exit 1
fi

# 2️⃣ Store folder path
FOLDER=$1

# 3️⃣ Go inside the folder
cd "$FOLDER" || exit

# 4️⃣ Loop through each file
for FILE in *; do
    # Check it is a normal file (not folder)
    if [ -f "$FILE" ]; then

        # Get file extension (txt, pdf, jpg)
        EXT="${FILE##*.}"

        # Create folder for extension
        mkdir -p "$EXT"

        # Move file into extension folder
        mv "$FILE" "$EXT/"
    fi
done

# 5️⃣ Show summary
echo "---- Summary ----"
for DIR in */; do
    COUNT=$(ls "$DIR" | wc -l)
    echo "Organized $COUNT .$DIR files"
done
