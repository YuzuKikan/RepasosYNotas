function generarTabla() {
  let tamaño = parseInt(document.getElementById('filasycolumnas').value);
  let tabla = document.createElement('tabla');
  let numero = 0;
  for (let i = 0; i < tamaño; i++) {
    let fila = document.createElement('tr');
    for (let j = 0; j < tamaño; j++) {
      let columna = document.createElement('td');
      columna.setAttribute('onclick', `color(${numero})`);
      columna.setAttribute('numero', numero++);
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }

  document.getElementById('tabla').appendChild(tabla);
}

function color(numero) {
  let td = document.querySelector(`td[numero='${numero}']`);

  if (td.style.backgroundColor == 'red') {
    td.style.backgroundColor = 'white';
  } else {
    td.style.backgroundColor = 'red';
  }
}
