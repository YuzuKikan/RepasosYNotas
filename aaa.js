window.addEventListener('load', eventos, false);

function eventos() {

  document.getElementById('crearPag').addEventListener("click", mensaje, false);
  document.getElementById('crearPag').addEventListener("click", crearPag, false);

  function mensaje() {
    var time = new Date();
    console.log(time.getHours() + " - " + time.getMinutes() + " - " + time.getSeconds());
    alert("ha pinchado");
  }

  function crearPag() {
    let ventana = ("aaa.html", "", "width = 200, height = 400");
  }

}