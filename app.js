let intentos = 1;

listanumeros = [];
let numeromaximo = 10;

function rellenar(elemento, texto){
    let html = document.querySelector(elemento);
    html.innerHTML = texto;
}
function VerificarIntento(){
    let intento = document.getElementById('intento').value;
    if (intento == numero){
       rellenar('h2',`acetaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'  }`)
       document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if(intento < numero){
            rellenar('h2','el numero es mayor');
          
        }
        else{
            rellenar('h2','el numero es menor');
        }
        intentos++
        console.log(intentos)
        limpiar();
    }
  
}

function limpiar(){
   let caja = document.querySelector('#intento');
   caja.value = '';

}
let numero = generarNumero();

console.log(' el numero secreto es '+ numero)
function generarNumero(){
    let numerosecreto = Math.floor(Math.random()* numeromaximo)+1;
 if (listanumeros.length == numeromaximo){
    alert('fin del juego')
 }
 else{
     console.log('numero '+ listanumeros);
     if (listanumeros.includes(numerosecreto)){
         return generarNumero();
     }else{
         listanumeros.push(numerosecreto)
         return numerosecreto
     }
 }
}

function reiniciar(){
    limpiar();
    mensajes();
    numero = generarNumero();
    intentos =1
    console.log('nuevo numero '+ numero)
    document.getElementById('reiniciar').setAttribute('disabled','true');

}
function mensajes(){
    rellenar('h1','juego numero secreto');
    rellenar('p',`numero de 1 a ${numeromaximo}`);
}
mensajes();
