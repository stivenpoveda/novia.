// Mensajes para cada día de la semana
const messages = [
    "Lunes: Eres el amanecer que despeja mis noches, el comienzo perfecto de cada uno de mis días. ☀️",  
"Martes: Amar es descubrir contigo que los sueños no terminan al despertar, porque contigo la vida misma es un sueño eterno. ✨",  
"Miércoles: Tus ojos son como faros en la oscuridad, guiándome hacia un amor que es infinito como el cielo. 🌌",  
"Jueves: El destino no escribió nuestra historia, lo hicimos nosotros cuando decidimos amarnos más allá de lo imaginable. 💍",  
"Viernes: Eres el verso perdido de mi poesía, el secreto que el universo susurra en cada estrella que brilla. 🌠",  
"Sábado: A tu lado aprendí que el tiempo no se mide en horas, sino en momentos que dejan huellas imborrables en el alma. 💞",  
"Domingo: Tu amor es el refugio donde mi corazón descansa, y contigo comienzo y termino cada semana, completo y feliz. 🕊️"  

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
