window.addEventListener('load', codigo);

function codigo() {
    document.getElementById('boton').addEventListener('click', asincrono);


    function asincrono() {
        
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', recibirXml);

    xhr.open("GET", "cd_catalog.xml");

    xhr.send();

    function recibirXml() {

        if (this.readyState == 4) {
                let objXml = this.responseXML;
        let lista = objXml.getElementsByTagName('ARTIST');

        console.log(lista);

        for (const valor of lista) {
            document.getElementById('resultado').innerHTML += valor.innerHTML+"<br>";
        }  
            }
        
    }   
    }

}