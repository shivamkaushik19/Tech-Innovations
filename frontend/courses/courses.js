document.addEventListener("DOMContentLoaded", function () {
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


// document.getElementById('myForm').addEventListener(', function(event) {
//     event.preventDefault(); // Prevent form submission

//     let isValid = true;

//     // Full name validation (no numbers)
//     const firstNameInput = document.getElementById('name');
//     const firstNameError = document.getElementById('first-name-error');
//     const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces are allowed
//     if (!nameRegex.test(firstNameInput.value)) {
//         firstNameError.textContent = "Name should not contain numbers or special characters.";
//         firstNameError.style.color = "red";
//         isValid = false;
//     } else {
//         firstNameError.textContent = "";
//     }

//     // Phone number validation (only numbers)
//     const lastNameInput = document.getElementById('phone');
//     const lastNameError = document.getElementById('last-name-error');
//     const phoneRegex = /^[0-9]+$/; // Only numbers are allowed
//     if (!phoneRegex.test(lastNameInput.value)) {
//         lastNameError.textContent = "Phone number should contain only numbers.";
//         lastNameError.style.color = "red";
//         isValid = false;
//     } else {
//         lastNameError.textContent = "";
//     }

//     // Email validation
//     const emailInput = document.getElementById('email');
//     const emailError = document.getElementById('email-error');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
//     if (!emailRegex.test(emailInput.value)) {
//         emailError.textContent = "Please enter a valid email address.";
//         emailError.style.color = "red";
//         isValid = false;
//     } else {
//         emailError.textContent = "";
//     }

//     // Message validation (at least 20 words)
//     const messageInput = document.getElementById('message');
//     const messageError = document.getElementById('message-error');
//     const messageWordCount = messageInput.value.trim().split(/\s+/).length;


//     // If the form is valid, submit it
//     if (isValid) {
//         window.location.href = "/frontend/thankyou/thank.html" ; // Replace "thankyou.html" with your actual thank you page URL
//     }

// });

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission until validation passes

  let isValid = true;

  // Full name validation (only letters and spaces)
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('first-name-error');
  const nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = "Name should only contain letters and spaces.";
    nameError.style.color = "red";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Phone number validation (numbers only)
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('last-name-error');
  const phoneRegex = /^[0-9]+$/; // Numbers only
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = "Phone number should contain only numbers.";
    phoneError.style.color = "red";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Email validation (basic format)
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.color = "red";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message validation (not empty)
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('message-error');
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please specify the course you want to join.";
    messageError.style.color = "red";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If the form is valid, trigger the backend submission
  if (isValid) {
    document.getElementById('vansh').click(); // Programmatically trigger the click event for backend submission
  }
});




// the backend
document.getElementById('vansh').addEventListener('click', async (event) => {
  event.preventDefault();

  // Collect form data
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    course: document.getElementById('message').value,
  };

  try {
    // Send data to the backend
    const response = await fetch('http://localhost:5000/api/Course/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Handle the response
    const result = await response.json();
    if (response.ok) {
      // Clear all input fields
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      // Redirect to thank you page
      window.location.href = "/frontend/thankyou/thank.html";
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});
