document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Code", "Build Websites", "Read Books", "Follow Tech", "Learn Electronics", "Manage the class"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var para1 = document.querySelector('.para1 span');
    var para2 = document.querySelector('.decode .para2 span');
    var para3 = document.querySelector('.ecobin .para3 span');
    var para4 = document.querySelector('.iot .para4 span');
    var para5 = document.querySelector('.decode .para5 span');

    function handleScroll() {
        var para1OffsetTop = para1.offsetTop;
        var para2OffsetTop = para2.offsetTop;
        var para3OffsetTop = para3.offsetTop;
        var para4OffsetTop = para4.offsetTop;
        var para5OffsetTop = para5.offsetTop;

        var scrollPosition = window.scrollY;

        if (scrollPosition > para1OffsetTop - window.innerHeight && scrollPosition < para1OffsetTop + para1.offsetHeight) {
            para1.classList.add('animate');
        } else {
            para1.classList.remove('animate');
        }

        if (scrollPosition > para2OffsetTop - window.innerHeight && scrollPosition < para2OffsetTop + para2.offsetHeight) {
            para2.classList.add('animate');
        } else {
            para2.classList.remove('animate');
        }

        if (scrollPosition > para3OffsetTop - window.innerHeight && scrollPosition < para3OffsetTop + para3.offsetHeight) {
            para3.classList.add('animate');
        } else {
            para3.classList.remove('animate');
        }

        if (scrollPosition > para4OffsetTop - window.innerHeight && scrollPosition < para4OffsetTop + para4.offsetHeight) {
            para4.classList.add('animate');
        } else {
            para4.classList.remove('animate');
        }

        // Add this block for para5
        if (scrollPosition > para5OffsetTop - window.innerHeight && scrollPosition < para5OffsetTop + para5.offsetHeight) {
            para5.classList.add('animate');
        } else {
            para5.classList.remove('animate');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
