function validatePassword(password) {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  
  if (password.length < 8) {
    errors.push("Too short");
    suggestions.push("Use at least 8 characters");
  } else {
    score += 20;
  }

  
  if (!/[A-Z]/.test(password)) {
    errors.push("Missing uppercase letter");
    suggestions.push("Add an uppercase letter");
  } else {
    score += 15;
  }

  
  if (!/[a-z]/.test(password)) {
    errors.push("Missing lowercase letter");
    suggestions.push("Add a lowercase letter");
  } else {
    score += 15;
  }


  if (!/[0-9]/.test(password)) {
    errors.push("Missing number");
    suggestions.push("Add a number");
  } else {
    score += 15;
  }

  
  if (!/[!@#$%^&*()_+\-=]/.test(password)) {
    errors.push("Missing special character");
    suggestions.push("Add a special character");
  } else {
    score += 20;
  }

  
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password used");
    suggestions.push("Avoid common passwords");
    score -= 30;
  }

  
  score = Math.max(0, Math.min(100, score));

  return {
    isValid: errors.length === 0,
    score,
    errors,
    suggestions
  };
}


//console.log(validatePassword("abc"));
console.log(validatePassword("MyP@ssw0rd!2024"));