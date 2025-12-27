const form = document.getElementById('registerForm');
const submitBtn = form.querySelector('button');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const validators = {
    username: false,
    email: false,
    password: false,
    confirm: false
};

function updateButton() {
    submitBtn.disabled = !Object.values(validators).every(Boolean);
}

function showError(input, message, valid) {
    const errorEl = document.getElementById(input.id + '-error');
    errorEl.textContent = message;
    input.className = valid ? 'success' : 'invalid';
}

username.addEventListener('blur', () => {
    const regex = /^[a-zA-Z0-9]{3,15}$/;
    validators.username = regex.test(username.value);
    showError(username, validators.username ? '✔ Valid' : '3-15 alphanumeric only', validators.username);
    updateButton();
});

email.addEventListener('blur', () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validators.email = regex.test(email.value);
    showError(email, validators.email ? '✔ Valid' : 'Invalid email format', validators.email);
    updateButton();
});

password.addEventListener('blur', () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    validators.password = regex.test(password.value);
    showError(password, validators.password ? '✔ Strong password' : '8+ chars, 1 uppercase, 1 number, 1 special', validators.password);
    updateButton();
});

confirmPassword.addEventListener('blur', () => {
    validators.confirm = confirmPassword.value === password.value && password.value !== '';
    showError(confirmPassword, validators.confirm ? '✔ Match' : 'Passwords do not match', validators.confirm);
    updateButton();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitBtn.disabled) {
        console.log('Form Submitted Successfully');
    }
});
