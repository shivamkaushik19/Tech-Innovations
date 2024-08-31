document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('messageError').innerText = '';

    let isValid = true;

    // Name validation: must not contain numbers or special characters, max 20 words
    const name = document.getElementById('name').value;
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name) || name.split(' ').length > 20) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name should contain only letters and be less than 20 words.';
    }

    // Email validation: standard email format
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
    }

    // Phone validation: must contain only numbers
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Phone number should contain only numeric values.';
    }

    // Message validation: must contain at least 20 words
    const message = document.getElementById('message').value;
    if (message.trim().split(' ').length < 20) {
        isValid = false;
        document.getElementById('messageError').innerText = 'Message should contain at least 20 words.';
    }

    if (isValid) {
        // If all fields are valid, submit the form
        window.location.href = "/frontend/thankyou/thank.html";
    }
});



// course
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  

  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

     
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });


  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }


  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


   
    
    // testonomials 
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
// why to choose us






let currentIndex = 1;

function showItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (index > items.length) {
        currentIndex = 1;
    } else if (index < 1) {
        currentIndex = items.length;
    }

    items.forEach((item, idx) => {
        item.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
        item.classList.remove('active');
    });

    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
    });

    items[currentIndex - 1].classList.add('active');
    dots[currentIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentIndex = idx + 1;
            showItem(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex++;
        if (currentIndex > document.querySelectorAll('.carousel-item').length) {
            currentIndex = 1;
        }
        showItem(currentIndex);
    }, 5000); // Change item every 5 seconds

    showItem(currentIndex);
});
