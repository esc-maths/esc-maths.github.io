/*---------------------------------------------------------------*/
/* Button to the top */
// Get the button

let mybutton = document.getElementById("toTop");
//let prevScrollpos = window.scrollY;

window.onscroll = function () { scrollFunction() };

// When the user scrolls down 500px from the top of the document, show the button
function scrollFunction() {
    //let currentScrollPos = window.scrollY;
    //if (prevScrollpos > currentScrollPos) {
    mybutton.style.display = "none";
    //} else {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    }
    //}
    //prevScrollpos = currentScrollPos;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    let tocLinks = document.querySelectorAll('.toc-chapter a');
    tocLinks.forEach((link) => {
        //link.classList.remove('active');
        link.classList.remove('highlight');
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*---------------------------------------------------------------*/


/*---------------------------------------------------------------*/
/* Interaction with the fixed navbar on the top */
/* left-link right-link */
const leftLink = document.getElementById('prev-link');
const rightLink = document.getElementById('next-link');
const centerLink = document.getElementById('center-link');

// Function to handle hover events for links
function handleLinkHover(event, originalSelector, hoverSelector) {
  // Find the original and hover content elements
  const contentOriginal = centerLink.querySelector(originalSelector);
  const contentHover = centerLink.querySelector(hoverSelector);

  // Check if the content elements exist before manipulating them
  if (contentOriginal && contentHover) {
    // Toggle display based on event type 
    if (event.type === 'mouseenter') {
      contentOriginal.style.display = 'none';
      contentHover.style.display = 'inline';
    } else if (event.type === 'mouseleave') {
      contentOriginal.style.display = 'inline';
      contentHover.style.display = 'none';
    }
  }
}

// Add event listeners only if the elements exist
if (leftLink) {
  leftLink.addEventListener('mouseenter', (event) => {
    handleLinkHover(event, '.content-original', '.content-hover-previous');
  });

  leftLink.addEventListener('mouseleave', (event) => {
    handleLinkHover(event, '.content-original', '.content-hover-previous');
  });
}

if (rightLink) {
  rightLink.addEventListener('mouseenter', (event) => {
    handleLinkHover(event, '.content-original', '.content-hover-next');
  });

  rightLink.addEventListener('mouseleave', (event) => {
    handleLinkHover(event, '.content-original', '.content-hover-next');
  });
}

if (centerLink) {
  centerLink.addEventListener('mouseenter', (event) => {
    // When hovering on center link, show general hover content 
    handleLinkHover(event, '.content-original', '.content-hover');
  });

  centerLink.addEventListener('mouseleave', (event) => {
    // When leaving center link, show original content 
    handleLinkHover(event, '.content-original', '.content-hover');
  });
}

/*---------------------------------------------------------------*/