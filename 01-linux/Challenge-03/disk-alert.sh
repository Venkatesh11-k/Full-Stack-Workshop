#!/bin/bash

THRESHOLD=$1

# Default threshold
if [ -z "$THRESHOLD" ]; then
    THRESHOLD=90
fi

ALERT=0

df -h | tail -n +2 | while read FS SIZE USED AVAIL USE MOUNT; do
    USE_NUM=${USE%\%}

    if [ "$USE_NUM" -ge "$THRESHOLD" ]; then
        echo "WARNING: $FS is at $USE (threshold: $THRESHOLD%)"
        ALERT=1
    else
        echo "OK: $FS is at $USE"
    fi
done

# Exit code
exit $ALERT

