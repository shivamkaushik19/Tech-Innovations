
function validateForm(event) {
   
    event.preventDefault();
  
    
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';
  
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true;
  
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
  
    const messageWords = message.split(/\s+/);
    if (message === "") {
        document.getElementById('message-error').innerText = 'Please enter a message.';
        isValid = false;
    }
    
    
    if (isValid) {
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
  
        window.location.href = "/frontend/thankyou/thank.html"; 
    }
    
    // Return the validation status
    return isValid;
}

  
// the for the backend
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        try {
            const response = await fetch('http://localhost:5000/api/GetInTouch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
    
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
});
