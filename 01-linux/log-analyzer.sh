
#!/bin/bash

# Log file path (default)
LOG_FILE=${1:-"C:/Users/vamsi/Downloads/sample-log.txt"}

# Check if log file exists
if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi

# Count total lines
total_lines=$(wc -l < "$LOG_FILE")

# Extract unique IP addresses
ip_addresses=$(grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' "$LOG_FILE" | sort | uniq)

# Log analysis report
echo "========== Log Analysis Report =========="
echo "File: $LOG_FILE"
echo "Total Lines: $total_lines"
echo "INFO: $(grep -c -i 'info' "$LOG_FILE")"
echo "ERROR: $(grep -c -i 'error' "$LOG_FILE")"
echo "WARNING: $(grep -c -i 'warning' "$LOG_FILE")"
echo

echo "Unique IP Addresses Found:"
if [ -n "$ip_addresses" ]; then
    for ip in $ip_addresses; do
        echo "$ip"
    done
else
    echo "No IP addresses found"
fi

echo "========================================"
