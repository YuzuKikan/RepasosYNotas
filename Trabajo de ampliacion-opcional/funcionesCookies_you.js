//Función que permite crear, modificar y eliminar cookies
//Crear: dar un nombre (name) y valor (value)
//Modificar: da un nombre (name) que ya existe y un nuevo valor (value)
//Crear y modificar se pueden indicar la vigencia de la cookie en días (days)
//Si no se introduce days --> cookie de sesión
//Eliminar: days=-1

window.addEventListener("load",cargar);

function manageCookies(name, value, days = "") {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

//Devuelve el valor de una cookie pasada como parámetro
//Devuelve null si no existe
function readCookies(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//Elimina todas las cookies del directorio que contiene la página
//Utiliza la función manageCookie
function deAllCookies() {
  var cookies = document.cookie.split(";");
  
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookie[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
}
