// Password Validation
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

confirmPasswordInput.addEventListener("input", () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.style.display = "block";
        passwordInput.style.borderColor = "red";
        confirmPasswordInput.style.borderColor = "red";
    } else {
        passwordError.style.display = "none";
        passwordInput.style.borderColor = "#ccc";
        confirmPasswordInput.style.borderColor = "#ccc";
    }
});

// Email Validation
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
    if (!emailInput.value.match(/[a-zA-Z0-9._%+-]+@byui\.edu$/)) {
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
    } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "#ccc";
    }
});

// Rating Display
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("rating-value");

ratingInput.addEventListener("input", () => {
    ratingValue.textContent = ratingInput.value;
});
