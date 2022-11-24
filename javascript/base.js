function buscar(texto) {
    localStorage.setItem("buscando", texto);
    redirect('../html/buscador.html');
}

function redirect(s) {
    location.href = s;
}