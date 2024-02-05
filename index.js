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

// ----------------------------------------------------------------section-2----------------------------




  // --------------------------------------------------------------section-3--------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  function showBuild(buildType) {
      var websiteElements = document.querySelector('.build-website');
      var mobileElements = document.querySelector('.build-mobile');
    
      if (buildType === 'build-website') {
        document.querySelector('.build-topic-website').style.backgroundColor = '#000000';
        document.querySelector('.build-topic-website').style.color= '#ffffff';
        document.querySelector('.build-topic-mobile').style.backgroundColor = '#fcf5ec';
        document.querySelector('.build-topic-mobile').style.color = '#000000';
          websiteElements.style.display = 'flex';
          mobileElements.style.display = 'none';
      } else if (buildType === 'build-mobile') {
        document.querySelector('.build-topic-mobile').style.backgroundColor = '#000000';
        document.querySelector('.build-topic-mobile').style.color = '#ffffff';
        document.querySelector('.build-topic-website').style.backgroundColor = '#fcf5ec';
        document.querySelector('.build-topic-website').style.color = '#000000';
          websiteElements.style.display = 'none';
          mobileElements.style.display = 'flex';
      }
  }

  showBuild('build-website');

  // Event listeners for the buttons
  document.querySelector('.build-topic-website').addEventListener('click', function() {
      showBuild('build-website');
  });

  document.querySelector('.build-topic-mobile').addEventListener('click', function() {
      showBuild('build-mobile');
  });


// =====================================================================section-4=================================================

function hideAll() {
  
  document.querySelectorAll(".grow-image img").forEach(image => image.classList.add("hidden"));
  document.querySelectorAll(".grow-content > div").forEach(content => content.classList.add("hidden"));
}
function hidecolorButton(hideButton) {
  document.querySelectorAll(".grow-dashboard li").forEach(button => {
    button.style.backgroundColor = '#000000';  // Reset background color
    button.style.borderRadius = '1px';  // Reset border radius
    button.style.color = '#ffffff';  // Reset text color
  });
}

function showGrow(growImage, growContent) {
  
  hideAll();
  document.querySelector(`.${growImage}`).classList.remove("hidden");
  document.querySelector(`.${growContent}`).classList.remove("hidden");
}

function showColorButton(growButton){
  document.querySelector(`.${growButton}`).style.backgroundColor='#FCF5EC';
  document.querySelector(`.${growButton}`).style.borderRadius = '4px';
  document.querySelector(`.${growButton}`).style.color='#000000';
}

showGrow('email-marketing-image', 'email-marketing-content');


document.querySelector('.email-marketing').addEventListener('click', function() {
  hidecolorButton('email-marketing');
  showGrow('email-marketing-image','email-marketing-content');
  showColorButton('email-marketing');
  
});

document.querySelector('.seo').addEventListener('click', function() {
  hidecolorButton('seo');
  showGrow('seo-image','seo-content');
  showColorButton('seo');
});

document.querySelector('.content-marketing').addEventListener('click', function() {
  hidecolorButton('content-marketing');
  showGrow('content-marketing-image','content-marketing-content');
  showColorButton('content-marketing');
});

document.querySelector('.sales').addEventListener('click', function() {
  hidecolorButton();
  showGrow('sales-image','sales-content');
  showColorButton('sales');
});

document.querySelector('.pay-per-click').addEventListener('click', function() {
  hidecolorButton();
  showGrow('pay-per-click-image', 'pay-per-click-content');  // Corrected class name
  showColorButton('pay-per-click');
});


document.querySelector('.social-media-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('social-media-marketing-image','social-media-marketing-content');
  showColorButton('social-media-marketing');
});

document.querySelector('.inbound-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('inbound-marketing-image','inbound-marketing-content');
  showColorButton('inbound-marketing');
});

document.querySelector('.search-engine-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('search-engine-marketing-image','search-engine-marketing-content');
  showColorButton('search-engine-marketing');
});


});




// --------------------------------------mobile view

document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.grow-dashboard-mobile li');
  let currentIndex = 0;

  // Function to show the current item and update button visibility
  function showCurrentItem() {
    listItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Get the corresponding image and content elements
    const growImage = document.querySelector(`.${listItems[currentIndex].classList[0]}-image`);
    const growContent = document.querySelector(`.${listItems[currentIndex].classList[0]}-content`);

    // Hide all images and content
    document.querySelectorAll(".grow-image img").forEach(image => image.classList.add("hidden"));
    document.querySelectorAll(".grow-content > div").forEach(content => content.classList.add("hidden"));

    // Show the current image and content
    growImage.classList.remove("hidden");
    growContent.classList.remove("hidden");

    // Update button visibility
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === listItems.length - 1 ? 'none' : 'block';
  }

  // Show the initial state
  showCurrentItem();

  // Function to show the previous item
  window.showPrevious = function () {
    if (currentIndex > 0) {
      currentIndex--;
      showCurrentItem();
    }
  };

  // Function to show the next item
  window.showNext = function () {
    if (currentIndex < listItems.length - 1) {
      currentIndex++;
      showCurrentItem();
    }
  };
});


/* ----------------------------------------------product-card section-------------------------------------------------------------- */
function redirectToUiuxCourse(){
  window.location.href="uiuxcourse.html";
}
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

// =====================================================testimonial================================================================

// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false,
//   isAutoPlay = true,
//   startX,
//   startScrollLeft,
//   timeoutId;


// const calculateCardPerView = () => {
//   return Math.round(carousel.offsetWidth / firstCardWidth);
// };

// const updateCarouselLayout = () => {
//   cardPerView = calculateCardPerView();

  
//   carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

//   carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
//   });


//   carousel.classList.add("no-transition");
//   carousel.scrollLeft = carousel.offsetWidth;
//   carousel.classList.remove("no-transition");
// };


// let cardPerView = calculateCardPerView();
// updateCarouselLayout();

// arrowBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//   });
// });

// const dragStart = e => {
//   isDragging = true;
//   carousel.classList.add("dragging");
  
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = e => {
//   if (!isDragging) return;
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// const infiniteScroll = () => {
  
//   if (carousel.scrollLeft === 0) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
//     carousel.classList.remove("no-transition");
//   }

//   else if (
//     Math.ceil(carousel.scrollLeft) ===
//     carousel.scrollWidth - carousel.offsetWidth
//   ) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.offsetWidth;
//     carousel.classList.remove("no-transition");
//   }

  
//   clearTimeout(timeoutId);
//   if (!wrapper.matches(":hover")) autoPlay();
// };

// const autoPlay = () => {
//   if (window.innerWidth < 800 || !isAutoPlay) return; 
//   timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
// };
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);
// window.addEventListener("resize", () => {
//   updateCarouselLayout();
// });