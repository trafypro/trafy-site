window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";}

function shareToTwitter() {
  const postTitle = encodeURIComponent('The Brief History Of Artificial Intelligence');
  const postUrl = encodeURIComponent('https://trafypro.com/The-Brief-History-of-Artificial-Intelligence.html');
  window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
}

function shareToLinkedIn() {
  const postTitle = encodeURIComponent('The Brief History Of Artificial Intelligence');
  const postUrl = encodeURIComponent('https://trafypro.com/The-Brief-History-of-Artificial-Intelligence.html');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
}

function shareToInstagram() {
  alert('Instagram sharing functionality not implemented in this example.');
}

function shareToFacebook() {
  const postTitle = encodeURIComponent('The Brief History Of Artificial Intelligence');
  const postUrl = encodeURIComponent('https://trafypro.com/The-Brief-History-of-Artificial-Intelligence.html');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
}

function scrollToTable(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
      });
  }
}

// =========================================================highlight-onscroll-table
document.addEventListener("DOMContentLoaded", function () {
// Get all the heading elements
var headings = document.querySelectorAll('.main-article-content h1, .main-article-content h2');

// Get all the list item elements
var listItems = document.querySelectorAll('.table-of-contents li');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function onScroll() {
  // Iterate through each heading
  headings.forEach((heading, index) => {
    // Check if the heading is in the viewport
    if (isElementInViewport(heading)) {
      // Remove the highlight class from all list items
      listItems.forEach(item => item.classList.remove('highlight'));
      // Add the highlight class to the corresponding list item
      listItems[index].classList.add('highlight');
    }
  });
}

// Attach the onScroll function to the scroll event of the window
window.addEventListener("scroll", onScroll);

// Trigger the onScroll function once to check the initial state
onScroll();
});