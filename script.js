// Mensajes para cada día de la semana
const messages = [
    "Lunes: Eres la luz de mis días. 🌟",
    "Martes: Amar es encontrar en ti un reflejo perfecto de lo que siempre soñé, y en cada día a tu lado, descubrir nuevas razones para seguir soñando. 💖",
    "Miércoles: En tus ojos veo el universo entero, y en cada suspiro contigo, descubro que la vida tiene más sentido cuando te tengo cerca. 💕",
    "Jueves: Cada vez que te miro, entiendo que el destino no es un concepto abstracto, sino el momento en que dos almas deciden ser una. 🌹",
    "Viernes: Amarte es como comprender la belleza de una estrella: un amor tan profundo que, aunque no podamos tocarlo, sabemos que está en cada rincón de nuestro ser ❤️",
    "Sábado: Cada momento a tu lado me recuerda que el verdadero amor no es un sueño, sino una realidad que se construye con cada latido de nuestro corazón. 😊",
    "Domingo: Te amo no solo por lo que eres, sino por todo lo que soy cuando estoy contigo, como si tú fueras el principio de un nuevo yo. 🌈"
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
