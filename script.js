// animation function header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
        header.style.background = '#111';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '15px 0';
    }
});