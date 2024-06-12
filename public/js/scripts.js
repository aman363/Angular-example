
function validateLoginForm() {
    var form = document.getElementById('loginForm');
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
    } else {
        // Form is valid, you can submit it or perform other actions here
        alert('Login form is valid');
        // Example: Submit the form
        // form.submit();
    }
}

function validateRegisterForm() {
    var form = document.getElementById('registerForm');
    var dobInput = document.getElementById('dob');
    var dobValue = dobInput.value;

    // Validate date of birth (dob) not after today
    var today = new Date();
    var selectedDate = new Date(dobValue);

    if (selectedDate > today) {
        // Date of birth is after today
        dobInput.setCustomValidity('Date of birth cannot be after today');
        alert('Date of birth cannot be after today');
    } else {
        // Date of birth is valid
        dobInput.setCustomValidity('');


    }


    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match');
        alert('Passwords do not match');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }


    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
    } else {
        // Form is valid, you can submit it or perform other actions here
        alert('Register form is valid');
        // Example: Submit the form
        // form.submit();
    }
}


function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var form = document.getElementById('contactForm');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    
    // Resetting previous validation classes
    form.classList.remove('was-validated');
    
    // Checking if form inputs are valid
    if (name.checkValidity() && email.checkValidity() && message.checkValidity()) {
        // Form is valid, perform actions like sending data or displaying success message
        alert('Form submitted successfully!');
        form.reset(); // Optional: Clear form fields after submission
    } else {
        // Form is invalid, display error messages
        form.classList.add('was-validated');
    }
}

// Adding event listener to the form for form submission
var form = document.getElementById('contactForm');
form.addEventListener('submit', validateForm);