//########################
// Crear una cookie ######
//########################

//Cookie de sesion
let testvalue = 'Hola_Mundo!';
document.cookie =
  'testcookie1=' +
  encodeURIComponent(testvalue) +
  ' espaciado ' +
  '\t testcookie2=' +
  encodeURIComponent(testvalue);

//Cookie que caduca a los 12 meses
let expiresdate = new Date();
expiresdate.setMonth(expiresdate.getMonth() + 12);
let cookievalue = 'Hello_World!';
document.cookie =
  'testcookie=' +
  encodeURIComponent(cookievalue) +
  '; expires=' +
  expiresdate.toUTCString();

//########################
// Modificar una cookie ##
//########################
