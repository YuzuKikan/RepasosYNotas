function insertar() {
  let value = document.getElementById('input').value;
  let liNode = document.createElement('li');
  liNode.textContent = value;
  document.getElementById('elemUl').appendChild(liNode);
  document.getElementById('input').value='';
}
function borrarPrimer() {

document.getElementsByTagName('li')[0].remove();


}
function borrarUltimo() {
    let cantidadElementos=document.getElementsByTagName('li').length
    document.getElementsByTagName('li')[cantidadElementos-1].remove();

}
