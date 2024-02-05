
function redirectToContact() {
    window.location.href = "https://share.hsforms.com/17rn21rf0QPmOogBTrpwHbgdek7a";
  }
  function redirectToAI(){
    window.location.href="The-Brief-History-of-Artificial-Intelligence.html";
  }
  function redirectToPush(){
    window.location.href="Indian-Tech-Companies-had-laid-off-over-16000-Employees-in-the-year-2023.html";
  }
  
  
    function scrollToSection(Website) {
      const section = document.getElementById(Website);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    function scrollToMarketing(Marketing) {
      const marketing = document.getElementById(Marketing);
      if (marketing) {
        marketing.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    function scrollToAcademy(Academy) {
      const academy = document.getElementById(Academy);
      if (academy) {
        academy.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  
  
  
  function toggleMenu() {
      const navbar = document.getElementById("navbar");
      const menuIcon = document.querySelector(".menu-icon");
    
      navbar.classList.toggle("active");
     
      menuIcon.innerHTML = navbar.classList.contains("active") ? '<span class="icon" style="color: white; font-size: 24px; ">&#10005;</span>' : '<span style="color: white;font-size:24px;">&#9776;</span>';
  
    }
    
    const solutionList = () => {
      const list = document.getElementById("solution-container");
      const solutionButton = document.querySelector(".solution");
    
      if (list.style.display === "none") {
        list.style.display = "block";
        solutionButton.classList.add("open");
        document.querySelector(".menu-icon").classList.add("invisble");
      } else {
        list.style.display = "none";
        solutionButton.classList.remove("open");
        document.querySelector(".menu-icon").classList.remove("invisble");
      }
    };

// ============================================download-syllabus======================================
// script.js
// script.js
function syllabusDownload() {
    document.querySelector(".download-syllabus-email-form").classList.add("active");
    document.querySelectorAll("body > *:not(.download-syllabus-email-form)").forEach(element => {
        element.classList.add("blur");});
    document.body.style.overflow = 'hidden';
    document.querySelector(".header").style.zIndex = 100;

   
  }
  
  function closeSyllabusForm() {
    document.querySelector(".download-syllabus-email-form").classList.remove("active");
    document.querySelectorAll("body > *:not(.download-syllabus-email-form)").forEach(element => {
        element.classList.remove("blur");
      });
    document.body.style.overflow = 'auto';
    document.querySelector(".header").style.zIndex = 1000;
  }
// ============================================syllabus================================================
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion1');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header1');
        const content = accordion.querySelector('.accordion-content1');

        // Set default bottom border for the accordion header
        header.style.borderBottom = '1px solid #121212';

        header.addEventListener('click', function() {
            // Toggle current accordion
            accordion.classList.toggle('active');

            // Toggle visibility and bottom border of content
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.style.borderBottom = 'none';
                content.style.borderBottom = '1px solid #121212';
            } else {
                content.style.maxHeight = null;
                header.style.borderBottom = '1px solid #121212';
                content.style.borderBottom = none;
            }

            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                    otherAccordion.classList.remove('active');
                    otherAccordion.querySelector('.accordion-content1').style.maxHeight = null;
                    otherAccordion.querySelector('.accordion-header1').style.borderBottom = '1px solid #121212';
                }
            });
        });
    });
});

// ===========================================FAQ======================================================
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');

        // Set default bottom border for the accordion header
        header.style.borderBottom = '1px solid #121212';

        header.addEventListener('click', function() {
            // Toggle current accordion
            accordion.classList.toggle('active');

            // Toggle visibility and bottom border of content
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.style.borderBottom = 'none';
                content.style.borderBottom = '1px solid #121212';
            } else {
                content.style.maxHeight = null;
                header.style.borderBottom = '1px solid #121212';
                content.style.borderBottom = none;
            }

            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                    otherAccordion.classList.remove('active');
                    otherAccordion.querySelector('.accordion-content').style.maxHeight = null;
                    otherAccordion.querySelector('.accordion-header').style.borderBottom = '1px solid #121212';
                }
            });
        });
    });
});
// ==========================================testimonial=====================================

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper1 .image-list1");
    const slideButtons = document.querySelectorAll(".slider-wrapper1 .slide-button1");
    const sliderScrollbar = document.querySelector(".container1 .slider-scrollbar1");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb1");
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
            const direction = button.id === "prev-slide1" ? -1 : 1;
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




  
const initSlider2 = () => {
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

window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);

// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   const slides = document.querySelector('.carousel-inner');
//   const prevButton = document.querySelector('.prev');
//   const nextButton = document.querySelector('.next');
//   const cardWidth = document.querySelector('.card').offsetWidth;
//   const numSlidesToShow = getNumSlidesToShow();

//   if (n <= 0) {
//     prevButton.style.display = 'none';
//   } else {
//     prevButton.style.display = 'block';
//   }

//   if (n >= slides.children[0].children.length - numSlidesToShow) {
//     nextButton.style.display = 'none';
//   } else {
//     nextButton.style.display = 'block';
//   }

//   slides.style.transform = `translateX(-${n * cardWidth * numSlidesToShow}px)`;
// }

// function getNumSlidesToShow() {
//   if (window.innerWidth >= 1024) {
//     return 1; // Desktop view
//   } else if (window.innerWidth >= 601) {
//     return 1; // Tablet view
//   } else {
//     return 1; // Mobile view
//   }
// }

// window.onresize = function () {
//   slideIndex = 0; // Reset slide index on window resize
//   showSlides(slideIndex);
// };

// // Initial show/hide buttons based on slideIndex
// showSlides(slideIndex);
