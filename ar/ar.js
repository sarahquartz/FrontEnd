let ligadoEnergia = true;
let temperatura = 30;
let janelaAberta = false;

if((ligadoEnergia && temperatura > 25) && !janelaAberta){
    console.log("Ar ligado");
}else{
    console.log("Ar desligado");
}

function abrirJanela(){
    janelaAberta = !janelaAberta;
    if(!janelaAberta){
        console.log("Ar ligado");
        document.getElementById("arImage").src = "ar2.jpg"
    }else{
        console.log("Ar desligado");
        document.getElementById("arImage").src = "ar.jpg"
    }

    
}