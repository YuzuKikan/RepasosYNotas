function mayor() {
  let numeros = [];
  let indiceMayor = 0;
  let numeroMayor = Number.MIN_VALUE;

  numeros[0] = document.getElementById("numero1").value;
  numeros[1] = document.getElementById("numero2").value;
  numeros[2] = document.getElementById("numero3").value;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
      indiceMayor = i + 1;
    }
    console.log(numeroMayor,indiceMayor)
  }

  document.getElementById("numero" + indiceMayor).style.border =
    "thick solid blue";
}

function menor() {
  let numeros = [];
  let indiceMenor = 0;
  let numeroMenor = Number.MAX_VALUE;

  numeros[0] = document.getElementById("numero1").value;
  numeros[1] = document.getElementById("numero2").value;
  numeros[2] = document.getElementById("numero3").value;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < numeroMenor) {
      numeroMenor = numeros[i];
      indiceMenor = i + 1;
    }
  }

  document.getElementById("numero" + indiceMenor).style.border =
    "thick solid red";
}
