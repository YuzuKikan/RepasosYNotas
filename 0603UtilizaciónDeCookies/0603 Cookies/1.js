window.addEventListener('load', eventos)

function eventos(){

    //crear modificar
    document.getElementById('crear/modificar').addEventListener('click',crearModificar)
    function crearModificar(){
        let name = document.getElementById('name').value
        let valor = document.getElementById('valor').value
        let dias = document.getElementById('dias').value
        if(name==''){
            document.getElementById('errores').innerHTML='debes introducir un nombre para crear la cookie'
        }else{
            document.getElementById('errores').innerHTML=''
            manageCookie(name, valor, dias)
            alert('Cookie creada: '+name+' = '+valor)
            document.getElementById('name').value='';
            document.getElementById('valor').value='';
            document.getElementById('dias').value='';
        }
    }

    //borrar cookie
    document.getElementById('borrarCookieConcreta').addEventListener('click',borrar)
    function borrar(){
        let name = document.getElementById('name').value
        if(name==''){
            document.getElementById('errores').innerHTML='debes introducir un nombre para crear la cookie'
        }else{
            document.getElementById('errores').innerHTML=''
            manageCookie(name, valor, -1)
            alert('Cookie borrada: '+name)
            document.getElementById('name').value='';
            document.getElementById('valor').value='';
            document.getElementById('dias').value='';
        }
    }

    //ver cookie
    document.getElementById('verCookieConcreta').addEventListener('click',ver)
    function ver(){
        let name = document.getElementById('name').value
        if(name=='' || readCookie(name)==null){
            document.getElementById('errores').innerHTML='debes introducir un nombre de cookie que exista'
        }else{
            document.getElementById('errores').innerHTML=''
            document.getElementById('valor').value=readCookie(name);
        }
    }

    //listado
    document.getElementById('listadoCookies').addEventListener('click',listado)
    function listado(){
        document.getElementById('lista').innerHTML=document.cookie.replace(';','<br>')
    }

    //borrar cookies
    document.getElementById('borrarCokies').addEventListener('click',borrar)
    function borrar(){
        delAllCookies();
        alert('todas las cookies borradas')
    }
}