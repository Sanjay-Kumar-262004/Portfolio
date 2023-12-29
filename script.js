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

        
// document.addEventListener("DOMContentLoaded", function () {
//     var para1 = document.querySelector('.para1 span');
//     var para2 = document.querySelector('.decode .para2 span');
//     var para3 = document.querySelector('.ecobin .para3 span');
//     var para4 = document.querySelector('.iot .para4 span');
//     var para5 = document.querySelector('.abet .para5 span');

//     function getElementOffsetTop(element) {
//         var offsetTop = 0;
//         while (element) {
//             offsetTop += element.offsetTop;
//             element = element.offsetParent;
//         }
//         return offsetTop;
//     }

//     function handleScroll() {
//         var para1OffsetTop = getElementOffsetTop(para1);
//         var para2OffsetTop = getElementOffsetTop(para2);
//         var para3OffsetTop = getElementOffsetTop(para3);
//         var para4OffsetTop = getElementOffsetTop(para4);
//         var para5OffsetTop = getElementOffsetTop(para5);

//         var scrollPosition = window.scrollY;

//         function addRemoveClass(element, offsetTop) {
//             if (scrollPosition > offsetTop - window.innerHeight && scrollPosition < offsetTop + element.offsetHeight) {
//                 element.classList.add('animate');
//             } else {
//                 element.classList.remove('animate');
//             }
//         }

//         addRemoveClass(para1, para1OffsetTop);
//         addRemoveClass(para2, para2OffsetTop);
//         addRemoveClass(para3, para3OffsetTop);
//         addRemoveClass(para4, para4OffsetTop);
//         addRemoveClass(para5, para5OffsetTop);
//     }

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
// });

