window.onload = () => {
    buscar()
}

function buscar() {
    var buscando = localStorage.getItem("buscando");
    if(buscando) {
        document.getElementById("input").content = buscando;
    }
    var recetas = [
        {
            imagen: "../img/receta1.jpg",
            nombre: "Galletas de agua",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta3.jpg",
            nombre: "Brownie",
            puntuacion: 5,
        },
        {
            imagen: "../img/receta4.jpg",
            nombre: "Ensalada cesar",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta5.jpg",
            nombre: "Crema shantishy",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta6.jpg",
            nombre: "Pure de calabaza",
            puntuacion: 3,
        },
        {
            imagen: "../img/receta7.jpg",
            nombre: "Guiso de verduras",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta2.jpg",
            nombre: "Salsa casera",
            puntuacion: 5,
        }
    ]
    var mezclado = [];
    for(var i = 0; i < 30; i++) {
        mezclado.push(recetas[Math.floor(Math.random() * recetas.length)]);
    }
    document.getElementById("resultado").innerHTML = mezclado
        .map(r => {
            return `<div class="receta">
                <img class="foto" src="${r.imagen}">
                <a href="https://cookpad.com/" target="_blank"><b>${r.nombre}</b></a>
                <div class="puntaje">
                    ${`<img src="../img/estrella.jpg">`.repeat(r.puntuacion)}
                </div>
            </div>`
        })
        .join("")
}