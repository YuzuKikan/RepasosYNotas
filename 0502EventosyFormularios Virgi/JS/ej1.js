window.addEventListener("load", cargar);

function cargar() {
  document.getElementById("ejecutar").addEventListener("click", ejecutar);
}

function ejecutar() {
  let nombre = document.getElementById("nombre").value;

  let cursos = "";
  let nombreFinal = "";
  let flag = true;

  if (nombre == "") {
    flag = false;
    document.getElementById("errorNombre").innerHTML =
      "Debe introducir un nombre";
  } else {
    flag = true;
    nombreFinal = nombre;
    document.getElementById("errorNombre").innerHTML = "";
  }

  lista = document.getElementsByName("cursos[]");
  cont = 0;
  for (obj of lista) {
    if (!obj.checked) {
      cont++;
      if (cont == 4) {
        flag = false;
        document.getElementById("errorCurso").innerHTML =
          "Debe seleccionar algun curso";
      }
    } else {
      cont--;
      if (cont != 4) {
        flag = true;
        document.getElementById("errorCurso").innerHTML = "";
      }
      cursos += obj.value + " - ";
    }
  }

  let selector = document.getElementById("edad");
  if (selector.value == "") {
    flag = false;
    document.getElementById("errorEdad").innerHTML =
      "Debe seleccionar una edad";
  } else {
    document.getElementById("errorEdad").innerHTML = "";
    flag = true;
    salidaEdad = selector.value;
  }

  let si = document.getElementById("si");
  let no = document.getElementById("no");
  if (si.checked || no.checked) {
    if (si.checked) salidaCheck = si.id;
    else salidaCheck = no.id;
  }

  if (flag) {
    document.getElementById("nom").innerHTML = nombreFinal;
    document.getElementById("eda").innerHTML = salidaEdad;
    cursos = cursos.substring(0, cursos.length - 2);
    document.getElementById("cur").innerHTML = cursos;
    document.getElementById("soc").innerHTML = salidaCheck;
  }
}
