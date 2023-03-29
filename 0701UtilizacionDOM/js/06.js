function generarTabla(tamaño) {
  let tabla = document.createElement('tabla');
  let numero = 0;
  for (let i = 0; i < tamaño; i++) {
    let fila = document.createElement('tr');
    for (let j = 0; j < tamaño; j++) {
      let columna = document.createElement('td');
      columna.setAttribute('onclick', `pintar(${numero})`);
      columna.setAttribute('onmouseover', `hoverPintar(${numero})`);
      columna.setAttribute('numero', numero++);
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }

  document.getElementById('tabla').appendChild(tabla);
}
generarTabla(25);

let color = 'red';
let colorActivo = false;

function elegirColor(colorSelecionado) {
  color = colorSelecionado;

  document.getElementById('colorSeleccionado').innerText = color;
}

function pintar(numero) {
  let td = document.querySelector(`td[numero='${numero}']`);
  colorActivo = !colorActivo;
  document.getElementById('colorActivo').innerText = colorActivo?'SI':'NO';
  if (colorActivo == true) {
    if (td.style.backgroundColor == color) {
      td.style.backgroundColor = 'white';
    } else {
      td.style.backgroundColor = color;
    }
  }
}

function hoverPintar(numero) {
  if (colorActivo == true) {
    let td = document.querySelector(`td[numero='${numero}']`);
    td.style.backgroundColor = color;
  }
}

function limpiarTabla() {
  let tds = document.getElementsByTagName('td');

  for (td of tds) {
    td.style.backgroundColor = 'white';
  }
}
