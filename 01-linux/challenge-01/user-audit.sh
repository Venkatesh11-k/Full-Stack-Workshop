
#!/bin/bash

echo "=== User Audit Report ==="

# Total users
total_users=$(wc -l < /etc/passwd)
echo "Total users: $total_users"

# Users with shell access (excluding nologin and false)
shell_users=$(awk -F: '$7 !~ /(nologin|false)/ {print $1}' /etc/passwd)
shell_count=$(echo "$shell_users" | wc -l)
echo "Users with shell access: $shell_count"

# Users without password
no_password_users=$(awk -F: '$2 == "" {print $1}' /etc/shadow 2>/dev/null)
no_password_count=$(echo "$no_password_users" | grep -c .)
echo "Users without password: $no_password_count"

for user in $no_password_users; do
  echo "  - $user"
done

echo "Last login info for shell users:"

for user in $shell_users; do
  last_login=$(lastlog -u "$user" | awk 'NR==2 {print $4, $5, $6}')
  if [ -n "$last_login" ]; then
    echo "  - $user: $last_login"
  fi
done


