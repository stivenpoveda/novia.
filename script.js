// Mensajes para cada día de la semana
const messages = [
    "Lunes: En el lienzo del tiempo, cada día contigo es una pincelada de eternidad. 🎨⏳",
     "Martes: No eres solo un capítulo en mi historia, eres el libro que quiero releer toda la vida. 📖❤️",
     "Miércoles: Entre todas las posibilidades del universo, elegí perderme en la certeza de tu amor. 🌌💫",
     "Jueves: Como el mar y la luna, nuestros destinos se atraen en una danza infinita. 🌊🌙",
     "Viernes: Si el tiempo es un susurro, el amor que siento por ti es un eco eterno. ⏳💞",
    "Sábado: No busco un paraíso perdido, lo encuentro en cada instante a tu lado. 🌿💖",
    "Domingo: Eres la pausa en mi caos, la melodía que da sentido a cada latido. 🎶💓"

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
