function scrollToSection(hash) {
  scrollToElement(hash);
}

function scrollToMarketing(hash) {
  scrollToElement(hash);
}

function scrollToAcademy(hash) {
  scrollToElement(hash);
}

function scrollToElement(hash) {
  const targetElement = document.querySelector(hash);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Add this script to handle the navigation
document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', function() {
    const href = this.getAttribute('data-href');
    if (href) {
      window.location.href = href;
    }
  });
});


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




