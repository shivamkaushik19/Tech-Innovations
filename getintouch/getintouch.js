
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';
  
    // Get the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true;
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for name validation (no digits)
    const nameRegex = /^[^\d]+$/;
  
    // Validate name (less than 20 words and no numeric values)
    const nameWords = name.split(/\s+/);
    if (name === "") {
        document.getElementById('name-error').innerText = 'Please enter your name.';
        isValid = false;
    } else if (nameWords.length > 20) {
        document.getElementById('name-error').innerText = 'Name should be less than 20 words.';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('name-error').innerText = 'Name should not contain numeric values.';
        isValid = false;
    }
  
    // Validate email
    if (email === "") {
        document.getElementById('email-error').innerText = 'Please enter your email address.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        isValid = false;
    }
  
    // Validate message (at least 20 words)
    const messageWords = message.split(/\s+/);
    if (message === "") {
        document.getElementById('message-error').innerText = 'Please enter a message.';
        isValid = false;
    } else if (messageWords.length < 20) {
        document.getElementById('message-error').innerText = 'Message should contain at least 20 words.';
        isValid = false;
    }
  
    // If all fields are valid, redirect to the thank you page
    if (isValid) {
        window.location.href = "/frontend/thankyou/thank.html"; // Ensure this path is correct
    }
    
    // Return the validation status
    return isValid;
  }
  