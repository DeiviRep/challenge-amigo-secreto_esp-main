// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (!nombre.trim()) {
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(nombre);
    limpiarCaja();
    actualizarListaAmigos();
    return;
}

function limpiarCaja(){
    document.getElementById("amigo").value = '';
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        lista.innerHTML += `<li>${amigo}</li>`
    }
    return;
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Deves, insertar los amigos");
        return;
    }
    const numeroAleatorio = generaNumeroAleatorio(amigos.length)
    let listaSorteo = document.getElementById("resultado");
    listaSorteo.innerHTML = `<li>${amigos[numeroAleatorio]}</li>`
    return;
}

function generaNumeroAleatorio(limite){
    return Math.floor(Math.random()*limite);
}