let tabla = document.createElement('table');
let firstrow = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
th1.textContent = 'Texto';
th2.textContent = 'Accion';
firstrow.appendChild(th1);
firstrow.appendChild(th2);
tabla.appendChild(firstrow);
let numberRow = 0;

function insertar() {
  numberRow++;
  let row = document.createElement('tr');
  row.setAttribute('numberRow', numberRow);
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let boton = document.createElement('button');
  boton.textContent = 'Eliminar';
  boton.setAttribute('onclick', `eliminar(${numberRow})`);
  td1.textContent = valor();
  td2.appendChild(boton);
  row.appendChild(td1);
  row.appendChild(td2);
  tabla.appendChild(row);
  document.getElementById('span').appendChild(tabla);
}

function valor() {
  let valor = document.getElementById('input').value;
  document.getElementById('input').value = '';
  return valor;
}

function eliminar(numberRow) {
  document.querySelector(`tr[numberrow='${numberRow}']`).remove();
  if(document.getElementsByTagName('tr').length==1){
    document.getElementsByTagName('table')[0].remove()
  }
}
