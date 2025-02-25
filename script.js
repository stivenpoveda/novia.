// Mensajes para cada día de la semana
const messages = [
"Lunes: No sé qué hice para merecerte, pero prometo amarte como si cada día fuera un milagro. ☀️❤️",
"Martes: En cada latido de mi corazón hay un ‘te amo’ dedicado solo a ti . 🌙💖",
"Miércoles: Si el universo me diera a elegir mil veces, en cada una volvería a escogerte a ti. ✨💕",
"Jueves: Somos dos almas que se reconocieron en la eternidad y decidieron amarse sin final. 💫💞",
"Viernes: A tu lado entendí que el amor no se trata de encontrar a alguien perfecto, sino de encontrar a alguien que haga perfecta tu vida.",
"Sábado: No existe rincón en el mundo que sea más hogar que tus brazos. 🏡💖",
"Domingo: En cada latido de mi corazón, tu nombre resuena como la más dulce melodía. 🎶💓"

];

// Obtener el día actual y ajustarlo (Lunes=0, Domingo=6)
const today = new Date().getDay();
const adjustedDay = today === 0 ? 6 : today - 1;  // Si es domingo (0), asignamos 6 (Sábado)

// Mostrar el mensaje correspondiente al día ajustado en el frente de la carta
document.getElementById("message").textContent = messages[adjustedDay];

// Función para hacer girar la carta al hacer clic
function rotateCard() {
    const card = document.getElementById("card");

    // Verificar si la carta ya tiene la clase 'clicked' (si está girada)
    if (card.classList.contains("clicked")) {
        // Si está girada, quitar la clase para volver al estado original
        card.classList.remove("clicked");
        document.getElementById("back-message").textContent = ''; // Limpiar el mensaje cuando vuelva al frente
    } else {
        // Si no está girada, agregar la clase para girarla
        card.classList.add("clicked");

        // Mostrar el mensaje del reverso
        setTimeout(() => {
            document.getElementById("back-message").textContent = messages[adjustedDay];
        }, 500); // Espera un poco para asegurar que la animación de giro se haya realizado
    }
}

// Función para abrir WhatsApp con el mensaje predefinido
function openWhatsApp() {
    const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent('¡Hola! Vi tu carta y me encantó.')}`;
    window.open(whatsappLink, '_blank');
}

// Asignar el evento al botón de WhatsApp
document.getElementById("whatsapp-button").addEventListener("click", openWhatsApp);
