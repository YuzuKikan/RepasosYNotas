function escribirNumero1() {
  if (isNaN(parseFloat(document.getElementById("numero1").value))) {
    document.getElementById("span1").innerText = "Debe escribir un numero";
    document.getElementById("numero1").focus();
  } else {
    document.getElementById("span1").innerText = "";
    document.getElementById("numero1").style.borderColor = "green";
  }
}

function escribirNumero2() {
  if (isNaN(parseFloat(document.getElementById("numero2").value))) {
    document.getElementById("span2").innerText = "Debe escribir un numero";
    document.getElementById("numero2").focus();
  } else {
    document.getElementById("span2").innerText = "";
    document.getElementById("numero2").style.borderColor = "green";
  }
}


function sumar() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);


  document.getElementById("total").innerText = isNaN(numero1+numero2) ? 0 : numero1 + numero2;
}
function restar() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  document.getElementById("total").innerText = isNaN(numero1+numero2) ? 0 : numero1 - numero2;
}
function multiplicar() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  document.getElementById("total").innerText = isNaN(numero1+numero2) ? 0 : numero1 * numero2;
}
