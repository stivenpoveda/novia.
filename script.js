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

// Obtener el día actual y ajustarlo (Lunes=0, Domingo=6)
const today = new Date().getDay();
const adjustedDay = today === 0 ? 6 : today - 1;  // Si es domingo (0), asignamos 6 (Sábado)

// Mostrar el mensaje correspondiente al día ajustado
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
