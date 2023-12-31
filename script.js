document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Code", "Build Websites", "Read Books", "Follow Tech", "Learn Electronics", "Manage the class"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    var cursorElement = document.createElement("span");
            cursorElement.className = "typed-cursor";
            document.querySelector(".typed-quote").appendChild(cursorElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".typed-quote", {
        strings: ['“There will always be hurdles in life, but if you want to achieve a goal, you must continue.” - Malala Yousafzai."'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false
    });
    var cursorElement = document.createElement("span");
            cursorElement.className = "typed-cursor";
            document.querySelector(".typed-quote").appendChild(cursorElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.para1, .para2, .para3, .para4, .para5, .para6, .para7, .para8, .para9, .para10, .para11, .para12');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
    };

    // Callback function to be executed when the paragraphs are in view
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animate' class to the paragraph in view
                entry.target.classList.add('animate');
                // Unobserve the paragraph to avoid unnecessary callbacks
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer with the callback and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each paragraph
    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Show or hide the scroll-to-top button based on the scroll position
function handleScrollForButton() {
    const scrollTopButton = document.querySelector('.scroll-top-btn');
    const scrollY = window.scrollY;

    if (scrollY > 500) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
}

// Event listener for scrolling
window.addEventListener('scroll', function () {
    handleScrollForButton();
});

// Event listener for clicking the scroll-to-top button
document.querySelector('.scroll-top-btn').addEventListener('click', function () {
    scrollToTop();
});
// Function to scroll to the target section smoothly
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach click event listeners to the dropdown content links
document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const sectionId = this.getAttribute('href').substring(1); // Get the target section ID
            scrollToSection(sectionId);
        });
    });
});
