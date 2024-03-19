let nombre=prompt('Ingresa tu nombre');
let edad=prompt('Ingresa su edad');
let categoria = confirm ('te ofresco un servicio?');

if(categoria){
    let servicio = prompt('Que servicio que buscas:');
    document.write('Mi nombre es' + servicio + '<br>');
   
    
} else{
    document.write('Lo siento no te puedo ayudar');
}

let color=confirm('elege un color:');
if(color){
    let paint=prompt('indica el color:')
    document.body.style.backgroundColor=paint;
}else{
    document.write('el color se mantiene');
}


