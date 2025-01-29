// Mensajes para cada día de la semana
const messages = [
    "Lunes: Eres el primer rayo de sol que acaricia mi alma, iluminando con tu amor cada nuevo comienzo. ☀️"

"Martes: Si el amor es un viaje, tú eres mi destino y cada camino que me lleva a ti. 🚀"

"Miércoles: En el universo de mis pensamientos, tú eres la constelación que siempre guía mi corazón. ✨"

"Jueves: Nuestro amor no es casualidad, es la obra maestra que el tiempo y la vida pintaron con cada latido. 🎨"

"Viernes: Bailamos al ritmo del destino, y en cada paso descubro que el amor eres tú. 💃❤️"

"Sábado: A tu lado, las horas no se cuentan, se sienten, se viven, se aman. ⏳💕"

"Domingo: Eres mi paz y mi tormenta, la calma donde mi alma reposa y el fuego que aviva mi ser. 🔥🕊️"  

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
