function fechas() {
  var cad = "";
  var cad1 = "";
  let fecha = new Date();

  document.write("<br>Dia de la semana : <strong>" + fecha.getDay() + "</strong>");
  document.write("<br>Dia del mes : <strong>" + fecha.getDate() + "</strong>");
  document.write("<br>Mes : <strong>" + (fecha.getMonth() + 1) + "</strong>");
  document.write("<br>Año : <strong>" + fecha.getFullYear() + "</strong>");
  document.write("<br>Hora : <strong>" + fecha.getHours() + "</strong>");
  document.write("<br>Minutos : <strong>" + fecha.getMinutes() + "</strong>");
  document.write("<br>Secundos : <strong>" + fecha.getSeconds() + "</strong>");
  document.write("<br>Milisegundos: <strong>" + fecha.getMilliseconds() + "</strong>");
  document.write("<br>Milisegundos desde 01/01/1970 : <strong>" + Date.now() + "</strong>");
  document.write("<br>Fecha formato inglés : <strong>" + fecha.toDateString() + "</strong>");
  document.write("<br>Fecha formato local : <strong>" + fecha.toLocaleDateString() + "</strong>");
  document.write("<br>Fecha y hora formato local: <strong>" + fecha.toLocaleString() + "</strong>");
  document.write("<br>Hora local: <strong>" + fecha.toLocaleTimeString() + "</strong>");
  document.write("<br>Fecha completa inglés + uso horario : <strong>" + fecha.toString() + "</strong>");
  document.write("<br>Hora + uso horario : <strong>" + fecha.toTimeString() + "</strong>");
  document.write("<br>Diferencia en minutos entre la hora del equipo local y el valor de UTC : <strong>"
    + fecha.getTimezoneOffset() + "</strong>");

  document.write("<br>______________________________________________________________________<br>");
  document.write();

  cad1 = Date.today().toString("MMMM, dS, yyyy");
  document.write(cad1);
}

function diaMes() {
  function dia() {/* 
    document.write("<br>" + fecha.getUTCDay());
    document.write("<br>" + fecha.getDay());
    document.write("<br>" + fecha.getDate()); */
    switch (fecha.getDay()) {
      case 0: return "Domingo";
      case 1: return "Lunes";
      case 2: return "Martes";
      case 3: return "Miércoles";
      case 4: return "Jueves";
      case 5: return "Viernes";
      case 6: return "Sábado";
      default: return "Error";
    }
  }
  function mes() {
    switch (fecha.getMonth()) {
      case 0: return "Enero";
      case 1: return "Febrero";
      case 2: return "Marzo";
      case 3: return "Abril";
      case 4: return "Mayo";
      case 5: return "Junio";
      case 6: return "Julio";
      case 7: return "Agosto";
      case 8: return "Septiembre";
      case 9: return "Octubre";
      case 10: return "Noviembre";
      case 11: return "Diciembre";
      default: return "Error";
    }
  }
}

function fechaCoincide() {
  let entrada = new Date(prompt("Introduce fecha así MM/DD/AAAA"));

  let fecha = new Date();

  function compatibilidad() {
    if (fecha.getDate() == entrada.getDate()) {
      if (fecha.getMonth() == entrada.getMonth()) {
        if (fecha.getFullYear() == entrada.getFullYear()) {
          document.write("Las fechas coinciden.");
        }
      }
    } else {
      document.write("Las fechas NO coinciden.");
    }
  }
  compatibilidad();
}
function bisiesto() {
  let year = parseInt(prompt("Introduce un año"));

  if (esBisiesto1(year)) {
    document.write("<br>Si es bisiesto" + year);
  } else
    document.write("<br>No es bisiesto" + year);

  function esBisiesto1(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }
}

function esEntero() {
  let numero = prompt("Introduce un numero");

  esEntero1(numero);
  esEntero2(numero);

  function esEntero1(numero) {
    if (isNaN(numero)) { alert("Ups... " + numero + " no es un número."); } else {
      if (numero % 1 == 0) {
        alert("Es un numero entero");
      } else { alert("Es un numero decimal"); }
    }
  }

  function esEntero2(numero) {
    if (isNaN(numero) || numero == "") {
      alert("Ups... " + numero + " no es un número.");
    } else { if (numero % 1 == 0) { alert("Es un entero"); } else { alert("No es un entero"); } }
  }
}

function math() {
  console.log("_____FUNCIONES Y MÉTODOS_____");
  console.log(Math.PI);
  console.log(Number.isFinite(Math.PI));
  console.log(Number.isInteger(Math.PI));
  console.log(Number.isSafeInteger(Math.PI));
  console.log(Math.PI.toExponential(15));
  console.log(Math.PI.toExponential(4));
  console.log(Math.PI.toFixed(4));
  console.log(Math.PI.toPrecision(4));
  console.log((Math.PI * 1e+6).toLocaleString('en-US'));
  console.log((Math.PI * 1e+6).toLocaleString('es-ES'));
  console.log(Math.PI.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }));
  console.log("___________________");
  console.log(Math.PI.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));
  console.log((Math.PI * 1e+6).toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
  console.log((Math.PI * 1e+6).toLocaleString('es-ES', { maximumSignificantDigits: 3 }));
  console.log((Math.PI * 1e+6).toLocaleString('ja-JP', { maximumSignificantDigits: 3 }));
  console.log((Math.PI * 1e+6).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  console.log((Math.PI * 1e+6).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  console.log((Math.PI * 1e+6).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  console.log((Math.PI * 1e+6).toLocaleString('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
}

function mirar() {
  let num1 = 12345.6789;
  let num2 = 5;
  var num = parseFloat(num1.toFixed(num2));
  console.log(num.toFixed(num2));
  console.log("US " + num.toLocaleString("en-US"));
  console.log("ES " + num.toLocaleString("es-ES"));
}

function deletrear() {
  let cadena = new String(prompt("Dame una palabra"));

  for (let i = 0; i < cadena.length; i++) {
    document.write("<br>" + cadena[i]);
  }
}

function palindromos() {
  //let cadena = new String(prompt("Dame una palabra"));
  let cadena = new String("dame UnA zÁnahória");
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
  let cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let signos = ['?', '¿', '!', '¡', ',', ';', '.', ':', ';', ' '];
  let cad = '';

  /*   ############   contador de vocales   ############   */
  function contador() {
    console.log("1.-----> " + cadena);
    let contV = 0;
    for (let i = 0; i < cadena.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (cadena[i] === arr[j]) {
          contV++;
        }
        /* if (cadena.charAt(i) === arr[j]) {
            contV++;
        } */
      }
    }
    return "cantidad de vocales: " + contV;
  }
  /*   ############   MARTES --> M-RT-S   ############   */
  function fuga() {
    cad = '';
    cadena = cadena.toLowerCase();
    console.log("2.-----> " + cadena);//por alguna razón no coge el 'zZ'
    for (let i = 0; i < cadena.length; i++) {

      for (let j = 0; j < arr.length; j++) {
        if (cadena.charAt(i) == cons[j]) {
          cad += cadena.charAt(i);
        }
        if (cadena.charAt(i) == arr[j]) {
          cad += "_";
        }
        if (cadena.charAt(i) == signos[j]) {
          cad += " ";
        }
      }
    }
    return cad;
  }
  /*   ############   martes --> MaRTeS   ############   */
  function mayusC() {
    cad = '';
    console.log("3.-----> " + cadena);
    for (let i = 0; i < cadena.length; i++) {

      for (let j = 0; j < arr.length; j++) {
        if (cadena.charAt(i) == cons[j]) {
          cad += cadena.charAt(i).toUpperCase();
        }
      }
    }
    return cad;
  }
  /*   ############   primera y ultima minuscula   ############   */
  function letras() {
    cad = '';
    console.log("4.-----> " + cadena);
    cad += cadena[0] + "//" + cadena[cadena.length - 1];
    return cad;
  }
  /*   ############   posiciones pares minuscilas   ############   */
  function pares() {
    cad = '';
    console.log("5.-----> " + cadena);
    for (let i = 0; i < cadena.length - 1; i++) {
      if (i % 2) {
        cad += cadena[i];
      }
    }
    return cad;
  }
  /*   ############   palindromo   ############   */
  function palindromo() {
    cadena = 'oSssO';
    cadena = cadena.toLowerCase();
    console.log("6.-----> " + cadena);

    if (cadena.length == 0) {
      return false;
    }
    for (let i = 0; i < cadena.length - 1; i++) {
      if (cadena[i] != cadena[(cadena.length - 1) - i]) {
        return false;
      }
    }
    return true;
  }
  /*   ############   oso => os-o  ||  osito => osi-to   ############   */
  function division() {
    cadena = 'osi';
    cad = '';
    console.log("7.-----> " + cadena);

    for (let i = 0; i < (cadena.length / 2); i++) {
      cad += cadena[i];
    }
    cad += " - ";
    for (let i = Math.round(cadena.length / 2); i < cadena.length; i++) {
      cad += cadena[i];
    }
    return cad;
  }


  console.log(contador());
  console.log(fuga());
  console.log(mayusC());
  console.log(letras());
  console.log(pares());
  console.log(palindromo());
  console.log(division());

}

function propiedadNav() {
  document.write("<h1>Ejercicio 15 - Propiedades de los objetos del navegador</h1><br>");

  document.write("<br><h3>Navegador:</h3>");
  document.write("<br>Lenguaje: " + navigator.language);
  document.write("<br>Sistema operativo: " + navigator.platform);
  document.write("<br>Memoria RAM: " + navigator.deviceMemory);

  document.write("<br><h3>Resolución de la pantalla:</h3>");
  document.write("<br>Altura total: " + screen.height);
  document.write("<br>Altura Disponible: " + screen.availHeight);
  document.write("<br>Altura no disponible: " + (screen.height - screen.availHeight));
  document.write("<br>Anchura total: " + screen.width);
  document.write("<br>Anchura Disponible: " + screen.availWidth);
  document.write("<br>Anchura no disponible: " + (screen.width - screen.availWidth));

  document.write("<br><h3>Ventana del navegador:</h3>");
  document.write("<br>Alto: " + window.innerHeight);
  document.write("<br>Ancho: " + window.innerWidth);
  document.write("<br>Altura exterior: " + window.outerHeight);
  document.write("<br>Anchura exterior: " + +window.outerWidth);
  document.write("<br>Marcos (frames): " + window.length);
  document.write("<br>URL: " + window.location);
  document.write("<br>¿Barra de direcciones?: " + window.locationbar.visible);
  document.write("<br>¿Barra de menú?: " + window.menubar.visible);
  document.write("<br>¿Barra de scroll?: " + window.scrollbars.visible);

  document.write("<br><h3>Documento HTML:</h3>");
  document.write("<br>Dominio: " + document.domain);
  document.write("<br>Location: " + document.location);
  document.write("<br>URL: " + document.URL);
  document.write("<br>Fecha modificacion HTML: " + document.lastModified);
  document.write("<br>Página que abrió a esta: " + document.referrer);
  document.write("<br>Formularios: " + document.forms);
  document.write("<br>Imagenes: " + document.images);
  document.write("<br>Enlaces: " + document.links);
  document.write("<br>Número de scripts: " + document.scripts.length);

  document.write("<br><h3>Historial:</h3>");
  document.write("<br>Páginas visitadas: " + history.length);

  document.write("<br><h3>URL de la página:</h3>");
  document.write("<br>Protocolo: " + location.protocol);
  document.write("<br>URL: " + location.href);
  document.write("<br>Origen: " + location.origin);
  document.write("<br>Dominio del servidor: " + location.hostname);
  document.write("<br>Dominio del servidor y puerto: " + location.host);
  document.write("<br>Puerto: " + location.port);
  document.write("<br>Cadena que sigue al nombre del servidor: " + location.pathname);/*  */
  document.write("<br>Cadena de búsqueda: " + +location.search);
  document.write("<br>Anclaje de la URL: " + location.hash);
  document.write("<br>Usuario: " + location.username);
  document.write("<br>Contraseña: " + location.password);
}

function colores() {
  document.write("<h1>Soy el Cambia Colores</h1>");

  document.write("<form name=\"cambiacolor\">");

  document.write("<select name=\"color\">");
  document.write("<option value=\"red\">Rojo</option>");
  document.write("<option value=\"blue\">Azul</option>");
  document.write("<option value=\"yellow\">Amarillo</option>");
  document.write("<option value=\"green\">Verde</option>");
  document.write("</select>");

  document.write("<select name=\"pag\">");
  document.write("<option value=\"headerframe\">Cabecera</option>");
  document.write("<option value=\"principalframe\">Principal</option>");
  document.write("<option value=\"footerframe\">Footer</option>");
  document.write("</select>");

  document.write("<br><br><input type=\"button\" value=\"Modifica el color\" onclick=\"parent.frames[cambiacolor.pag.value].document.body.style.backgroundColor=document.cambiacolor.color.value\">");
  document.write("</form>");
}

function aplicarIVA() {
  document.write(`<h1>Ejercicio 2 - Calcular IVA</h1>`);
  precio = parseFloat(prompt("Introduce el precio del producto"));
  iva = parseFloat(prompt("Introduce el iva del producto"));
  precioFinal = precio + (precio * iva) / 100;
  document.write(`<p>Precio sin iva: ${precio.toFixed(2)}€
  <br>
IVA: ${iva.toFixed(2)}%
<br>
Precio con iva: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(precioFinal.toFixed(2))}</p>`);
  // Intl.NumberFormat => formatear un numero como cadena de moneda en javaScript
}

function diasAnyo() {
  fecha = prompt("Introduce una fecha en formato mm/aaaa");
  fecha = fecha.split("/");
  mes = fecha[0];
  anyo = fecha[1];
  diasMes = new Date(anyo, mes, 0).getDate();

  if (mes == 0 || mes > 12 || anyo == 0) {
/* document.write(`Se produjo un error`);
 */diasAnyo();
  } else if (diasMes == 1) {
    document.write(`<h1>Ejercicio 3 - Días del mes de un año</h1>`);
    document.write(`El mes ${mes} del año ${anyo} tiene 0 días`);
  } else {
    document.write(`<h1>Ejercicio 3 - Días del mes de un año</h1>`);
    document.write(`<p>El mes ${mes} del año ${anyo} tiene ${diasMes} días</p>`);
  }
}

function numAleatorio() {

  num1 = parseFloat(prompt("Introduce el primer número"));
  num2 = parseFloat(prompt("Introduce el segundo número"));

  if (num1 == 0 || num2 == 0) {
    numAleatorio();
  } else {
    document.write(`<h1>Ejercicio 4 - Número aleatorio</h1>`);
    aleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    document.write(`<p>Número aleatorio entre ${num1} y ${num2}: ${aleatorio}</p>`);
  }
}

function parImpar() {
  document.write(`<h1>Ejercicio 1 - Número par o impar</h1>`);

  numero = parseInt(prompt("Introduce un número"));
  if (!isNaN(numero) && numero != null) {
    if (numero % 2 == 0) {
      document.write(`El número ${numero} es par`);
    } else {
      document.write(`El número ${numero} es impar`);
    }
  } else {
    document.write('No se ha introducido un numero');
  }
}

function numAleatorio() {

  num1 = parseFloat(prompt("Introduce el primer número"));
  num2 = parseFloat(prompt("Introduce el segundo número"));
  num3 = parseFloat(prompt("Cantidad de numeros aleatorios"));
  let aleatorio = new Array(num3);


  for (let i = 0; i < num3; i++) {
    aleatorio[i] = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
  }
  document.write(`<h1>Ejercicio 4 - Número aleatorio</h1>`);

  document.write(`<p>${num3} número aleatorio entre ${num1} y ${num2}</p>`);
  for (let i = 0; i < num3; i++) {
    document.write(`<p>${aleatorio[i]}</p>`);
  }
}

function palindromo() {
  document.write(`<h1>Ejercicio 6 - Palíndromo</h1>`);
  let cadena = prompt('Ponme palabra');
  cadena = cadena.toLowerCase(cadena);
  if (cadena.length == 0) {
    return document.write('está vacía la cadena <br>');
  }
  for (let i = 0; i < cadena.length - 1; i++) {
    if (cadena[i] != cadena[(cadena.length - 1) - i]) {
      return document.write(`${cadena}<br>no es palindromo`);
    }
  }
  return document.write(`${cadena}<br>es palindromo`);
}

function ejer3() {
  let fecha = new Date();
  fecha1 = fecha.toLocaleDateString();
  document.write(`<h1>Ejercicio 7 - Fecha de hoy</h1><br>`);

  document.write(`Fecha de hoy: <strong> ${fechaFormateada(fecha1)} </strong><br>`);
  document.write(`Día de la semana: <strong>${diaSemana(fecha)} </strong><br>`);
  document.write(`Mes: <strong> ${mes(fecha)}</strong><br>`);

  //https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/
}
function fechaFormateada(fecha1) {
  return fecha1;
}

function mes(fecha1) {
  switch (fecha1.getMonth()) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    default: return "Error";
  }
}
function diaSemana(fecha1) {
  switch (fecha1.getDay()) {
    case 0: return "Domingo";
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miercoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sabado";
    default: return "Error";
  }
}

function abcInverso() {
  let abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let cadena = prompt('Introduce una cadena');
  let cadInver = '';

  for (let i = 0; i < cadena.length; i++) {
    document.write(cadena[i]);

    for (let j = 0; j < abecedario.length - 1; j++) {
      if (cadena[i] == ' ') {
        cadInver += ' ';
      }
      if (cadena[i] == abecedario[j]) {
        cadInver += abecedario[(abecedario.length - 1) - j];
      }
    }
  }
  document.write(`<br>${cadInver}`);

}

function noSeSiFunciona(){
  function MiObjeto(valor1, valor2, valor3) {
    this.nombre = valor1;
    this.apellido1 = valor2;
    this.apellido2 = valor3;
    this.saldo = 0;
  }
  function nombreTitular() {
    return document.getElementById("resultado").innerText = `Nombre y apellido ${nombre} ${apellido1} ${apellido2}`;
  }
  function ingresar(cantidad) {
    saldo = this.saldo + cantidad;
  }
  function retirar(cantidad) {
    saldo = this.saldo - cantidad;
  }
  function infoSaldo() {
    return document.getElementById("resultado").innerText = saldo;
  }
}

function clickear() {
  document.getElementById("contarClicks").addEventListener("click", contar);
  document.getElementById("borrarClicks").addEventListener("click", borrar);

  function contar() {
    valor = parseInt(document.getElementById("cantidadClicks").innerHTML);
    valor++;
    document.getElementById("cantidadClicks").innerHTML = valor;
  }

  function borrar() {
    document.getElementById("cantidadClicks").innerHTML = 0;
  }
}

function cargar2() {
  window.addEventListener("blur", pierdeFoco);
  window.addEventListener("resize", cambiaTamaño);
  window.addEventListener("beforeunload", cerrarVentana);

  function cambiaTamaño() {
    cont = parseInt(document.getElementById("redimension").innerHTML);
    cont++;
    document.getElementById("redimension").innerHTML = cont;
  }

  function pierdeFoco() {
    cont = parseInt(document.getElementById("foco").innerHTML);
    cont++;
    document.getElementById("foco").innerHTML = cont;
  }

  function cerrarVentana() {
    cont = parseInt(document.getElementById("cerrar").innerHTML);
    cont++;
    document.getElementById("cerrar").innerHTML = cont;
    return alert("asd");
    //return confirm;
  }
}
window.onbeforeunload = confirmExit;
function confirmExit() {
  return "You have attempted to leave this page. Are you sure?";
}


function calcularPrecio() {

  let unidades = document.getElementById("unidades").value
  let precio = document.getElementById("precio").value
  let format = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })
  document.getElementById("total").innerText = format.format(unidades * precio)
}

