document.addEventListener("DOMContentLoaded", function() {
    const text = "Tech Innovations";
    let i = 0;
    const speed = 100; 
  
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
// slider js 
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider-content').style.transform = `translateX(${offset}%)`; 
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(() => {
    nextSlide();
}, 4000); 


// validation


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Full name validation (no numbers)
    const firstNameInput = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces are allowed
    if (!nameRegex.test(firstNameInput.value)) {
        firstNameError.textContent = "Name should not contain numbers or special characters.";
        firstNameError.style.color = "red";
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    // Phone number validation (only numbers)
    const lastNameInput = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    const phoneRegex = /^[0-9]+$/; // Only numbers are allowed
    if (!phoneRegex.test(lastNameInput.value)) {
        lastNameError.textContent = "Phone number should contain only numbers.";
        lastNameError.style.color = "red";
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Message validation (at least 20 words)
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    const messageWordCount = messageInput.value.trim().split(/\s+/).length;
    if (messageWordCount < 20) {
        messageError.textContent = "Message should contain at least 20 words.";
        messageError.style.color = "red";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    // If the form is valid, submit it
    if (isValid) {
        window.location.href = "/frontend/thankyou/thank.html" ; // Replace "thankyou.html" with your actual thank you page URL
    }

});