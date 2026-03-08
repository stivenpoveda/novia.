document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    
    // Función para rotar la carta
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
        
        // Efecto de confeti simple al abrir (opcional)
        if (card.classList.contains('is-flipped')) {
            createHeartExplosion();
        }
    });

    // Mensajes románticos aleatorios (si se quiere variar)
    const messages = [
        "Eres la casualidad más bonita que llegó a mi vida. Te amo infinitamente.",
        "Cada día a tu lado es un regalo. Gracias por existir, Juliana.",
        "No importa lo que pase, mi lugar favorito siempre será contigo.",
        "Tu sonrisa ilumina mis días más grises. Te adoro.",
        "Contigo, hasta el infinito y más allá. ❤️"
    ];

    // Descomentar para activar mensaje aleatorio cada vez que recarga
    /*
    const messageElement = document.getElementById('back-message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
    */
});

function createHeartExplosion() {
    const container = document.querySelector('.scene');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.transform = `translate(-50%, -50%)`;
        heart.style.opacity = '0';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'all 1s ease-out';
        
        container.appendChild(heart);

        // Dispersión aleatoria
        setTimeout(() => {
            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;
            heart.style.transform = `translate(${x}px, ${y}px)`;
            heart.style.opacity = '1';
            
            // Desvanecer
            setTimeout(() => {
                heart.style.opacity = '0';
                setTimeout(() => heart.remove(), 500);
            }, 500);
        }, 50);
    }
}
