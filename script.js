// Espera o DOM (documento) estar totalmente carregado
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. INICIALIZAÇÃO DA BIBLIOTECA AOS (Animações) ---
    // Documentação: https://github.com/michalsnik/aos
    AOS.init({
        // Configurações Globais
        duration: 800, // Duração padrão da animação em milissegundos
        easing: 'ease-in-out', // Tipo de transição
        once: true, // Se a animação deve ocorrer apenas uma vez (ao rolar para baixo)
        mirror: false, // Se os elementos devem animar para fora ao rolar para cima
        anchorPlacement: 'top-bottom', // Define qual posição do elemento em relação à tela dispara a animação
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = '#000';
            header.style.padding = '15px 0';
        }
    });

    document.querySelectorAll('.header__menu-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let scrollToPosition;

                if (window.innerWidth > 1024) {
                    const elementTop = targetElement.offsetTop;
                    const elementHeight = targetElement.offsetHeight;
                    const windowHeight = window.innerHeight;

                    scrollToPosition = elementTop - (windowHeight / 2) + (elementHeight / 2);
                } else {
                    scrollToPosition = targetElement.offsetTop - 85;
                }

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});