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