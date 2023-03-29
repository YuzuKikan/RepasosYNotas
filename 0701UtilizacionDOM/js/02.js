let imagenes = [
  './gifts/Bird.gif',
  './gifts/Cat.gif',
  './gifts/Dog.gif',
  './gifts/Pig.gif',
  './gifts/Rabbit.gif',
];
let posicion = 0;
function primera() {
  document.getElementById('img').src = imagenes[0];
  posicion = 0;
}

function ultima() {
  document.getElementById('img').src = imagenes[imagenes.length - 1];
  posicion = imagenes.length - 1;
}

function siguiente() {
  if (posicion < imagenes.length - 1) {
    document.getElementById('img').src = imagenes[++posicion];
  }
}

function anterior() {
  if (posicion > 0) {
    document.getElementById('img').src = imagenes[--posicion];
  }
}
