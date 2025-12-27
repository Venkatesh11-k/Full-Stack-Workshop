const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'editor' }
];

function formatUser({ name, email, role = 'user' }) {
    return `${name} (${role}): ${email}`;
}

users.forEach(user => console.log(formatUser(user)));