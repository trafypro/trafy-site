function redirectToContact() {
    window.location.href = "https://share.hsforms.com/17rn21rf0QPmOogBTrpwHbgdek7a";
  }
  function redirectToAI(){
    window.location.href="The-Brief-History-of-Artificial-Intelligence.html";
  }
  function redirectToPush(){
    window.location.href="Indian-Tech-Companies-had-laid-off-over-16000-Employees-in-the-year-2023.html";
  }
  function opaque(progressClass){
    document.querySelector(`.${progressClass} .grow-progress`).style.width = "100%";
    document.querySelector(`.${progressClass} .grow-progress`).style.opacity = 1;
  
  }
  function noopaque(progressClass){
    document.querySelector(`.${progressClass} .grow-progress`).style.opacity = 0;
    document.querySelector(`.${progressClass} .grow-progress`).style.width = "0%";
  
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

// -----------------------------------course-syllabus--------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion1');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header1');
        const content = accordion.querySelector('.accordion-content1');

        // Set default bottom border for the accordion header
        header.style.borderBottom = '1px solid #777676';

        header.addEventListener('click', function() {
            // Toggle current accordion
            accordion.classList.toggle('active');

            // Toggle visibility and bottom border of content
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.style.borderBottom = 'none';
                content.style.borderBottom = '1px solid #777676';
            } else {
                content.style.maxHeight = null;
                header.style.borderBottom = '1px solid #777676';
                content.style.borderBottom = 'none';
            }

            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                    otherAccordion.classList.remove('active');
                    otherAccordion.querySelector('.accordion-content1').style.maxHeight = null;
                    otherAccordion.querySelector('.accordion-header1').style.borderBottom = '1px solid #777676';
                }
            });
        });
    });
});

// ------------------------------------------faq----------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll('.accordion2');

  accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header2');
      const content = accordion.querySelector('.accordion-content2');

      // Set default bottom border for the accordion header
      header.style.borderBottom = '1px solid #777676';

      header.addEventListener('click', function() {
          // Toggle current accordion
          accordion.classList.toggle('active');

          // Toggle visibility and bottom border of content
          if (accordion.classList.contains('active')) {
              content.style.maxHeight = content.scrollHeight + "px";
              header.style.borderBottom = 'none';
              content.style.borderBottom = '1px solid #777676';
          } else {
              content.style.maxHeight = null;
              header.style.borderBottom = '1px solid #777676';
              content.style.borderBottom = 'none';
          }

          // Close all other accordions
          accordions.forEach(otherAccordion => {
              if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                  otherAccordion.classList.remove('active');
                  otherAccordion.querySelector('.accordion-content2').style.maxHeight = null;
                  otherAccordion.querySelector('.accordion-header2').style.borderBottom = '1px solid #777676';
              }
          });
      });
  });
});