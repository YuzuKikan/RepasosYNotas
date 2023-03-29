let bordeActivado = false;
let colorActivado = false;
let fondoActivado = false;

function borde() {
  bordeActivado = !bordeActivado;

  let parrafos = document.querySelectorAll('.parrafo');
  if (bordeActivado == true) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.border = '1px solid black';
    }
  }
  if (bordeActivado == false) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.border = '1px solid yellow';
    }
  }
}

function color() {
  colorActivado = !colorActivado;

  let parrafos = document.querySelectorAll('.parrafo');
  if (colorActivado == true) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.color = 'blue';
    }
  }
  if (colorActivado == false) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.color = 'black';
    }
  }
}
function fondo() {
  fondoActivado = !fondoActivado;

  let parrafos = document.querySelectorAll('.parrafo');
  if (fondoActivado == true) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.backgroundColor = 'yellow';
    }
  }
  if (fondoActivado == false) {
    for (parrafo in parrafos) {
      parrafos[parrafo].style.backgroundColor = 'white';
    }
  }
}
