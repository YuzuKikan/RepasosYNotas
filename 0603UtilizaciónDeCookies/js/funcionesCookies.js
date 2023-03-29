"/* // Función que permite crear, modificar y eliminar cookies */",
"function manageCookies(name, value, days = '') {if (!name || name == '') {showError('Debe introducir un nombre para crear la cookie');return;}",

"if (days) {let date = new Date();date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);var expires = '; expires=' + date.toUTCString();} else {var expires = '';}",
"document.cookie = name + '=' + value + expires + '; path=/';days != -1 && days >= -1 ? showMessage('Cookie creada: ' + name + ' = ' + value): false;days == -1 ? showMessage('Cookie eliminada: ' + name) : false;clearForm();}",

"/* // Función que devuelve el valor de una cookie pasada como parámetro */",
"function readCookies(name) {if (!name) {showError('Debe introducir el nombre de la cookie que desea ver');return;}",

"let cookiesDatos = document.cookie.split(';');",

"let salir = true;",
"for (let i = 0; i < cookiesDatos.length && salir; i++) {if (cookiesDatos[i].includes(name)) {let cookN = cookiesDatos[i].split('=');document.getElementById('value').value = cookN[1];salir = false;}}if (salir) {showError('No se encontró la cookie con el nombre especificado');}}",

"/* // Función que elimina todas las cookies del directorio que contiene la página */",
"function deAllCookies() {let cookiesDatos = document.cookie.split(';');for (let index = 0; index < cookiesDatos.length; index++) {let resultado = cookiesDatos[index].split('=');manageCookies(resultado[0], resultado[1], (days = '-1'));showMessage('Cookie eliminada: ' + resultado[0]);}clearForm();}",



"/* // Función que muestra un mensaje */",
"function showMessage(message) {let messageDiv = document.createElement('div');messageDiv.innerHTML = message;document.body.insertBefore(messageDiv, document.getElementById('form'));}",

"/* // Función que muestra un error */",
"function showError(error) {let errorDiv = document.createElement('div');errorDiv.style.color = 'red';errorDiv.innerHTML = error;document.body.insertBefore(errorDiv, document.getElementById('form'));}",

"/* // Función que limpia los valores de los campos del formulario */",
"function clearForm() {document.getElementById('name').value = '';document.getElementById('value').value = '';document.getElementById('days').value = '';}",
