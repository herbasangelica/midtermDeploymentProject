function validateLoginForm() {
    try {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "" || password === "") {
            throw new Error("Please fill in all fields.");
        }

        // You can add more specific validation here, e.g., password strength checks.

        return true;
    } catch (error) {
        console.log('error');
        console.log('error.message');
        return false;
    }
    finally {
        console.log('Finally');
    }
}
validateLoginForm();

// Get references to the form and input fields using their IDs.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add a submit event listener to the form.
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the form from submitting by default.

    // Check if all input fields have the "success" class (indicating they are valid).
    if (document.querySelectorAll('.success').length === 4) {
        // If all fields are valid, redirect to the dashboard.html page.
        window.location.href = 'dashboard.html';
    }
    // Call the validateInputs function to perform field validation.
    validateInputs();
});

// Function to set an error message for an input element.
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set a success state for an input element (clear error message).
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to check if an email is valid using a regular expression.
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Function to validate all input fields.
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Validate the username field.
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Validate the email field.
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // Validate the password field.
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
    } else {
        setSuccess(password);
    }

    // Validate the password confirmation field.
    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }
};


