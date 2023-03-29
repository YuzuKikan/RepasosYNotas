function mostrarDatos() {
  validarNombre();
  validarEdad();
  validarCursos();

  let checkcursos = document.querySelectorAll('input[name="cursos"]:checked');
  let cursos = [];
  checkcursos.forEach((checkbox) => {
    cursos.push(checkbox.value);
  });

  let checkcSocio = document.querySelectorAll('input[name="socio"]:checked');
  let socio = [];
  checkcSocio.forEach((checkbox) => {
    socio.push(checkbox.value);
  });

  console.log();

  document.getElementById("mostrar").innerHTML = `<h1>DATOS DEL FORMULARIO</h1>
    
  <p>Nombre: ${document.getElementById("nombre").value}</p>
  <p>Cursos: ${cursos.map((i) => i)}</p>
  <p>Edad: ${document.getElementById("edad").value}</p>
  <p>¿Eres socio? ${socio.map((i) => i)}</p>

  `;
}



function validarNombre() {
  if (!document.getElementById("nombre").value) {
    document.getElementById("spanNombre").innerText =
      " Debe introducir un nombre";
  } else {
    document.getElementById("spanNombre").innerText = "";
  }
}
function validarCursos() {
  if (document.querySelectorAll('input[name="cursos"]:checked').length == 0) {
    document.getElementById("spanCursos").innerText =
      " Debe seleccionar algun curso";
  } else {
    document.getElementById("spanCursos").innerText = "";
  }
}
function validarEdad() {
  if (document.getElementById("edad").value == "0") {
    document.getElementById("spanEdad").innerText = " Debe introducir una Edad";
  } else {
    document.getElementById("spanEdad").innerText = "";
  }
}
