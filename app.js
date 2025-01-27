// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let valorEntrada = document.getElementById('amigo');
    let nombreAmigo = valorEntrada.value.trim();

// Validar que el campo no esté vacío
    if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre.');
    return;
}   

// Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

// Actualizar la lista en la interfaz
    actualizarListaAmigos();

// Limpiar el campo de entrada
    valorEntrada.value = '';
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
    let listItem = document.createElement('li');
    listItem.textContent = amigo;
    listaAmigos.appendChild(listItem);
});
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
    alert('Debe haber al menos 2 amigos para realizar el sorteo.');
    return;
}

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${sorteado}</strong></li>`;
}