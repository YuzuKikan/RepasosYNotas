//Función que permite crear, modificar y eliminar cookies
//Crear: dar un nombre (name) y valor (value)
//Modificar: da un nombre (name) que ya existe y un nuevo valor (value)
//Crear y modificar se pueden indicar la vigencia de la cookie en días (days)
//Si no se introduce days -->   cookie de sesión
//Eliminar: days=-1

// Función que permite crear, modificar y eliminar cookies
function manageCookies(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Función que devuelve el valor de una cookie pasada como parámetro
function readCookies(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Función que elimina todas las cookies del directorio que contiene la página
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    manageCookies(cookies[i].split("=")[0], "", -1);
  }
}

/* 
? Por ejemplo, para crear una cookie con nombre username y valor johndoe durante 5 días, se utilizaría la siguiente línea de código:
manageCookies("username", "johndoe", 5);

? Para leer el valor de la cookie username, se utilizaría la siguiente línea de código:
var username = readCookies("username");

? Para eliminar todas las cookies, se utilizaría la siguiente línea de código:
deleteAllCookies();

! Puedes modificar una cookie existente llamando a la función manageCookies y pasándose los parámetros name, value y (opcionalmente) days. El parámetro name debe ser el nombre de la cookie que quieres modificar, value es el nuevo valor que quieres asignar a la cookie y days es la vigencia de la cookie en días. Si no se especifica el parámetro days, la cookie será una cookie de sesión.
!Aquí tienes un ejemplo de código para modificar una cookie existente:
manageCookies("nombre_cookie", "nuevo_valor", 7);

*/



/*

function manageCookies(name, value, days = "") {

  // Crear cookie
  if (days !== "") {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
  // Modificar cookie
  if (days > 0) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  // Eliminar cookie
  if (days === -1) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

}

//Devuelve el valor de una cookie pasada como parámetro
//Devuelve null si no existe
function reaCookies(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;

}

//Elimina todas las cookies del directorio que contiene la página
//Utiliza la función manageCookie
function deAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

}


  
  */