window.addEventListener('load', codigo);


function codigo() {
    document.getElementById('boton').addEventListener('click', asincrono);

    function asincrono() {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', recibirRespuesta);
        xhr.open('GET', 'ajax_info.txt');
        xhr.send();

        function recibirRespuesta() {
            let resultado = document.getElementById('resultado');
            if (this.readyState == 4) {
                resultado.innerHTML = this.responseText;   
            }
        }

    }



}