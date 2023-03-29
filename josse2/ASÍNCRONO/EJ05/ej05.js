window.addEventListener('load', codigo);

function codigo() {

    fetch('listaCompra.xml')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        return new DOMParser().parseFromString(data, 'application/xml');
    })
    .then(function(objXML){
        getObjXML(objXML);

        function getObjXML(objXML) {
            var cont = 0;
            console.log(objXML);
            for (let index = 2; index < document.getElementsByTagName('option').length; index++) {
                document.getElementsByTagName('option')[index].innerHTML= objXML.children[0].children[cont++].tagName;
            }
            document.getElementsByTagName('select')[0].addEventListener('change', eligeLista);
            var arrayLista = objXML.children[0].children;
            var arrayCarne = arrayLista[1].children[0];
            var arrayLeche = arrayLista[2].children[1];
            var arrayPatatas = arrayLista[0].children[0];
            var arrayZanahorias = arrayLista[0].children[1];
            var arrayPimientos = arrayLista[0].children[2];
            var arrayPollo = arrayLista[1].children[1];
            var arrayYogur = arrayLista[2].children[0];


            function eligeLista() {
                switch (this.selectedIndex) {
                    case 1:
                        console.log()
                        document.getElementById('pintar').innerHTML='<img src="./img/carne.jpg" alt=""><span>'+arrayCarne.attributes[0].value+' '+arrayCarne.attributes[1].value+' de '+arrayCarne.innerHTML+'</span><br><img src="./img/leche.jpg" alt=""><span>'+arrayLeche.attributes[0].value+' '+arrayLeche.attributes[1].value+' de '+arrayLeche.innerHTML+'</span><br><img src="./img/patatas.jpg" alt=""><span>'+arrayPatatas.attributes[0].value+' '+arrayPatatas.attributes[1].value+' de '+arrayPatatas.innerHTML+'</span><br><img src="./img/pimientosrojos.jpg" alt=""><span>'+arrayPimientos.attributes[0].value+' '+arrayPimientos.attributes[1].value+' de '+arrayPimientos.innerHTML+'</span><br><img src="./img/pollo.jpg" alt=""><span>'+arrayPollo.attributes[0].value+' '+arrayPollo.attributes[1].value+' de '+arrayPollo.innerHTML+'</span><br><img src="./img/yogourt.jpg" alt=""><span>'+arrayYogur.attributes[0].value+' '+arrayYogur.attributes[1].value+' de '+arrayYogur.innerHTML+'</span>'
                        break;
                    case 2:
                        document.getElementById('pintar').innerHTML= '<img src="./img/patatas.jpg" alt=""><span>'+arrayPatatas.attributes[0].value+' '+arrayPatatas.attributes[1].value+' de '+arrayPatatas.innerHTML+'</span><br><img src="./img/pimientosrojos.jpg" alt=""><span>'+arrayPimientos.attributes[0].value+' '+arrayPimientos.attributes[1].value+' de '+arrayPimientos.innerHTML+'</span>'
                        break;
                    case 3:
                        document.getElementById('pintar').innerHTML= '<img src="./img/carne.jpg" alt=""><span>'+arrayCarne.attributes[0].value+' '+arrayCarne.attributes[1].value+' de '+arrayCarne.innerHTML+'</span><br><img src="./img/pollo.jpg" alt=""><span>'+arrayPollo.attributes[0].value+' '+arrayPollo.attributes[1].value+' de '+arrayPollo.innerHTML+'</span>'
                        break;

                        case 4:
                            document.getElementById('pintar').innerHTML= '<img src="./img/leche.jpg" alt=""><span>'+arrayLeche.attributes[0].value+' '+arrayLeche.attributes[1].value+' de '+arrayLeche.innerHTML+'</span><br><img src="./img/yogourt.jpg" alt=""><span>'+arrayYogur.attributes[0].value+' '+arrayYogur.attributes[1].value+' de '+arrayYogur.innerHTML+'</span>'
                            break;
                        default:
                            document.getElementById('pintar').innerHTML='';
                            break;
                }
            }
        }
    })
    .catch(function(error){
        console.error(error);
    })

   
   
}