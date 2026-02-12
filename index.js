document.getElementById("registrationForm").addEventListener("submit", function (event) {

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let namePattern = /^[A-Za-z]+$/;
    let phonePattern = /^[0-9]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (!namePattern.test(firstName)) {
        alert("First Name should contain letters only.");
        event.preventDefault();
        return;
    }

    if (!namePattern.test(lastName)) {
        alert("Last Name should contain letters only.");
        event.preventDefault();
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone Number should contain numbers only.");
        event.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});
