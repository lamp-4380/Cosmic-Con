document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    // Adiciona uma animação ao passar o mouse sobre os cards
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 15px 25px rgba(234, 128, 255, 0.6)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 10px 20px rgba(234, 128, 255, 0.3)';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    // Configuração do Intersection Observer para detectar quando os cartões entram na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para de observar o cartão após a animação
            }
        });
    }, {
        threshold: 0.1
    });

    // Atribui o atraso dinâmico para cada cartão e observa sua visibilidade
    cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.2}s`);
        observer.observe(card);
    });
});
