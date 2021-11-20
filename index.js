/* Array con cartas, habíamos pensado hacer un array de 8 objetos y luego duplicarlos,
pero por no complicarnos y como hemos visto ejemplos en internet que lo hacían así, hemos
hecho un array con 8 objetos repetido dos veces */

const array = [
  {
    dibujo: "dibujo1",
    imagen: "img/01.png",
  },
  {
    dibujo: "dibujo1",
    imagen: "img/01.png",
  },
  {
    dibujo: "dibujo2",
    imagen: "img/02.png",
  },
  {
    dibujo: "dibujo2",
    imagen: "img/02.png",
  },
  {
    dibujo: "dibujo3",
    imagen: "img/03.png",
  },
  {
    dibujo: "dibujo3",
    imagen: "img/03.png",
  },
  {
    dibujo: "dibujo4",
    imagen: "img/04.png",
  },
  {
    dibujo: "dibujo4",
    imagen: "img/04.png",
  },
  {
    dibujo: "dibujo5",
    imagen: "img/05.png",
  },
  {
    dibujo: "dibujo5",
    imagen: "img/05.png",
  },
  {
    dibujo: "dibujo6",
    imagen: "img/06.png",
  },
  {
    dibujo: "dibujo6",
    imagen: "img/06.png",
  },
  {
    dibujo: "dibujo7",
    imagen: "img/07.png",
  },
  {
    dibujo: "dibujo7",
    imagen: "img/07.png",
  },
  {
    dibujo: "dibujo8",
    imagen: "img/08.png",
  },
  {
    dibujo: "dibujo8",
    imagen: "img/08.png",
  },
];

//--------------------------------------------------------------------------------

/* Variables necesarias para la funcion elegirCarta */

let seleccionadas = 0;
let cartaAnterior = -1;
let movimientos = 0;
let aciertos = 0;

//--------------------------------------------------------------------------------

/* Función para poner las cartas de forma aleatoria, asignarle el estilo y el reverso */

function mezclarCartas() {
  array.sort(() => Math.random() - 0.5);
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    document.getElementById(i).setAttribute("class", "carta reverso");
  }
}

//--------------------------------------------------------------------------------

/* Funciones para mostrar la imagen o el fondo de la carta seleccionada */

function mostrarCarta(i) {
  document.getElementById(i).style.backgroundImage =
    "url('" + array[i].imagen + "')";
}

function ocultarCarta(i) {
  document.getElementById(i).style.backgroundImage = "url('img/reverso.png')";
}

//--------------------------------------------------------------------------------

/* Función elegirCarta, compara las dos cartas seleccionadas, si coinciden, las deja mostradas,
si no coinciden las vuelve a ocultar despues de 1 segundo */

function elegirCarta(i) {
  mostrarCarta(i);
  if (seleccionadas == 0) {
    cartaAnterior = i;
    seleccionadas = 1;
  } else {
    if (array[cartaAnterior].dibujo === array[i].dibujo) {
      aciertos++;
    } else {
      setTimeout(() => {
        ocultarCarta(cartaAnterior);
        ocultarCarta(i);
      }, 1000);
    }
    seleccionadas = 0;
    movimientos++;
  }

  document.getElementById("movimientos").innerHTML = movimientos;

  if (aciertos == 8) {
    document.getElementById(
      "ganador"
    ).innerHTML = `<p class="felicitacion"><strong>Felicidades!<strong><br>Encontraste todas las parejas<p>`;
    document.getElementById("ganador").style.padding = "50px";
    document.getElementById("ganador").style.borderRadius = "5px";
    document.getElementById("ganador").style.position = "absolute";
    document.getElementById("ganador").style.top = "50%";
    document.getElementById("ganador").style.left = "50%";
    document.getElementById("ganador").style.transform =
      "translate(-50%, -50%)";
    document.getElementById("ganador").style.backgroundColor =
      "rgba(255, 255, 255, 0.616)";
    document.getElementById("ganador").style.textAlign = "center";
    document.getElementById("ganador").style.fontSize = "72px";
    document.getElementById("ganador").style.color = "#3f3f3f";
    document.getElementById("ganador").style.marginLeft = "5%";
    contador = 0;
  }
}

let contador = 0;
function refrescarContador() {
  $(".contador").html(contador);
}
function incrementarContador() {
  contador++;
}
setInterval(function () {
  incrementarContador();
  refrescarContador();
}, 1000);
