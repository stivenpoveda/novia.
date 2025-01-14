// Mensajes para cada día de la semana
const messages = [
    "Lunes: Eres la luz de mis días. 🌟",
    "Martes: Cada momento contigo es mágico. 💖",
    "Miércoles: Tu amor llena mi corazón. 💕",
    "Jueves: Gracias por ser mi inspiración diaria. 🌹",
    "Viernes: Contigo, todo es posible. ❤️",
    "Sábado: Eres mi alegría constante. 😊",
    "Domingo: Mi amor por ti nunca termina. 🌈"
];

// Obtener el día actual
const today = new Date().getDay();
document.getElementById("message").textContent = messages[today];

// Función para abrir el sobre
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.envelope-flap');
    const card = document.querySelector('.card');

    // Girar el sobre y mostrar la carta
    flap.style.transform = "rotateX(-180deg)";
    envelope.style.transform = "rotateY(180deg)";
    card.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
}
