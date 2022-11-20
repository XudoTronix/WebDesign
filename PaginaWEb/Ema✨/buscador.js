window.onload = () => {
    buscar()
}

function buscar() {
    var recetas = [
        {
            imagen: "../img/receta1.png",
            nombre: "Galletas de agua",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta2.png",
            nombre: "Galletas de limon",
            puntuacion: 2,
        },
        {
            imagen: "../img/receta3.png",
            nombre: "Brownie",
            puntuacion: 5,
        },
        {
            imagen: "../img/receta4.png",
            nombre: "Ensalada cesar",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta5.png",
            nombre: "Crema shantishy",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta6.png",
            nombre: "Pure de calabaza",
            puntuacion: 3,
        },
        {
            imagen: "../img/receta7.png",
            nombre: "Guiso de verduras",
            puntuacion: 4,
        },
        {
            imagen: "../img/receta8.png",
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
                    ${`<img src="../img/estrella.png">`.repeat(r.puntuacion)}
                </div>
            </div>`
        })
        .join("")
}