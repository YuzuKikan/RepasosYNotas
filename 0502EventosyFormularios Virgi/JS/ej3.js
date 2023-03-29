window.addEventListener("load",initEventos)


function initEventos(){
    
    document.getElementById("mayor").addEventListener("click",calcular)
    document.getElementById("menor").addEventListener("click",calcular)

      
    document.getElementById("n1").addEventListener("blur",quitarVacio)
    document.getElementById("n2").addEventListener("blur",quitarVacio)
    document.getElementById("n3").addEventListener("blur",quitarVacio)
   
    

}

function quitarVacio(evento){

    if(document.getElementById(evento.target.id).value == "")
        document.getElementById(evento.target.id).value = 0

}

function calcular(e){
    
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 =  parseInt(document.getElementById("n2").value)
    let n3 =  parseInt(document.getElementById("n3").value)

   
    if(n1 > n2){

        if (n1 > n3){
            mayor = "n1"
            if(n3>n2){
                menor = "n2"
                neutro = "n3"
            }
            else{
                menor = "n3"
                neutro = "n2"
            }
                
        }else{
            mayor = "n3"
            neutro = "n1"
            menor = "n2"
        }

    }else{

        if(n1 < n2){
            if (n2 > n3){
                mayor = "n2"
                if(n3>n1){
                    neutro = "n3"
                    menor = "n1"
                }else{
                    neutro = "n1"
                    menor = "n3"
                }
            }else{
                mayor = "n3"
                neutro = "n2"
                menor = "n1"
            }
        }
    }
   
        switch (e.target.id) {
            case "mayor":
                colorear(mayor,e.target.id,neutro)
                break;
            case "menor":
                colorear(e.target.id,menor,neutro)
                    break;        
           
        }
  
   
   
   
} 
    


function colorear(mayor,menor,neutro){
    document.getElementById(mayor).style.backgroundColor= "yellow"
    document.getElementById(menor).style.backgroundColor= "cyan"
    document.getElementById(neutro).style.backgroundColor= "white"
    document.getElementById("mayor").style.backgroundColor = "white"
    document.getElementById("menor").style.backgroundColor = "white"
}





      
      
    
 
