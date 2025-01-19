//1º SELECCIONAR LOS ELEMENTOS DEL DOM
const boton=document.getElementById('botonColor')
const texto=document.getElementById('color')

function generarColorHexRandom(){
    let digitos='0123456789ABCDEF';
    let colorHex='#';

    for(let i=0;i<6;i++){
        let indexRandom=Math.floor(Math.random()*16);
        colorHex+=digitos[indexRandom];
    }
    return colorHex;
}
//en el llamador metemos directamente la función, pero se podría haber hecho por separado
boton.addEventListener('click',function(){
    let colorRandom=generarColorHexRandom()
    //actualizar texto
    texto.textContent=colorRandom;
    //actualizar color de fondo
    document.body.style.backgroundColor=colorRandom
})