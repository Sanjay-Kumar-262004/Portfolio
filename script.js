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
        strings: ['"Education is the most powerful weapon you can use to change the world - Nelson Mandela"'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
    var cursorElement = document.createElement("span");
            cursorElement.className = "typed-cursor";
            document.querySelector(".typed-quote").appendChild(cursorElement);
});
document.addEventListener("DOMContentLoaded", function () {
    // Get all paragraphs with class 'para1', 'para2', etc.
    const paragraphs = document.querySelectorAll('.para1, .para2, .para3, .para4, .para5, .para6, .para7, .para8, .para9, .para10, .para11');

    // Intersection Observer options
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
// document.addEventListener("DOMContentLoaded", function () {
//     const backToTopBtn = document.querySelector('.back-to-top-btn');
//     let isScrollingUp = false;

//     function handleScroll() {
//         const scrollY = window.scrollY;

//         if (scrollY > 300 && !isScrollingUp) {
//             backToTopBtn.classList.add('visible'); // Add 'visible' class
//         } else {
//             backToTopBtn.classList.remove('visible'); // Remove 'visible' class
//         }
//     }

//     window.addEventListener('scroll', function () {
//         handleScroll();
//     });

//     window.addEventListener('wheel', function (e) {
//         isScrollingUp = e.deltaY < 0;
//     });

//     function scrollToTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }

//     backToTopBtn.addEventListener('click', scrollToTop);
// });

