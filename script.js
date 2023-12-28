document.addEventListener("DOMContentLoaded", function () {
    var para1 = document.querySelector('.para1 span');
    var para1OffsetTop = para1.offsetTop;

    function handleScroll() {
        var scrollPosition = window.scrollY;
        if (scrollPosition > para1OffsetTop - window.innerHeight) {
            para1.classList.add('animate');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});