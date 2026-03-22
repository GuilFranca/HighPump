// animation function header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = '#000';
        header.style.padding = '15px 0';
    }
});

// animation smoth scroll
document.querySelectorAll('.header__menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop -85,
                behavior: 'smooth'
            })
        } 
    })
});