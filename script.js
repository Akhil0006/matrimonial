// Login Form Validation
function validateLoginForm() {
    const email = document.forms["loginForm"]["email"].value;
    const password = document.forms["loginForm"]["password"].value;

    if (email === "" || password === "") {
        alert("Please fill in both Email and Password.");
        return false; // Prevent form submit
    }
    return true;
}

// Register Form Validation
function validateRegisterForm() {
    const name = document.forms["registerForm"]["fullname"].value;
    const email = document.forms["registerForm"]["email"].value;
    const password = document.forms["registerForm"]["password"].value;
    const lookingFor = document.forms["registerForm"]["lookingFor"].value;

    // Basic validation
    if (name === "" || email === "" || password === "" || lookingFor === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submit
    }

    // Basic Email Format Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true; // Allow form submit
}