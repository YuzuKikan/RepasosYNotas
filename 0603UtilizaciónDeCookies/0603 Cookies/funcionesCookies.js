
function readCookie(name) {
  let cookiesDatos = document.cookie.split(";");

  for (let index = 0; index < cookiesDatos.length; index++) {
    if (cookiesDatos[index].includes(name)) {
      let resultado = cookiesDatos[index].split("=");
      return resultado[1];
    }
  }

  return null;
}
function delAllCookies() {
  let cookiesDatos = document.cookie.split(";");
  for (let index = 0; index < cookiesDatos.length; index++) {
    let resultado = cookiesDatos[index].split("=");
    manageCookie(resultado[0], resultado[1], (days = "-1"));
    showMessage("Cookie eliminada: " + resultado[0]);
  }
}
