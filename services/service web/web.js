function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('name-error');
    const nameRegex = /^[a-zA-Z\s]{1,50}$/;
    if (!nameRegex.test(name)) {
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.style.display = 'block';
        valid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('message-error');
    if (message.split(' ').length < 20) {
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    // If all validations pass, redirect to the thank you page
    if (valid) {
        window.location.href = "/frontend/thankyou/thank.html"; // Ensure this path is correct
    }

    return valid;
}
