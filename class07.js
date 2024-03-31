function pedirNombre() {
    return prompt("Ingresa tu nombre");
}

function saludar(usuarioNombre) {
    document.write('Hola ' + usuarioNombre);
}

let edad = prompt("¿Cuál es tu edad?");
edad = parseInt(edad);

if (edad >= 18) {
    alert("Bienvenido");
} else {
    alert("No se permite acceso a menores de edad. Nos vemos pronto");
}

function Ayuda() {
    document.write('¿Cómo te podemos ayudar?');
}