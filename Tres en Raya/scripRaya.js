let finPartida=false;
let ganador=false;
let jugador1;
let jugador2;
let casillaJug1;
let casillaJug2;
let finalTiempo=false;
let casillaOcupada=true;
//let arrayTablero=[['-','-','-'],['-','-','-'],['-','-','-']];
while(finPartida){
    for(let i=0;i<2;i++){
        //Una ronda por jugador:
        //mostrar qué jugador toca por pantalla

        //pedir lugar casilla
        //función para revisar si la casilla está vacía
        while(casillaOcupada){
            //pedir lugar casilla
            //función para revisar si la casilla está vacía
            if(true){
                casillaOcupada=false
            }
        }
        console.log()//ficha en el tablero
        //comprobar ganador
        if(ganador){break}

    }
    

}
function xTablero(e){
    const casilla=document.getElementById(e.toString());
    casilla.innerText='X'

}
function oTablero(e){
    const casilla=document.getElementById(e.toString());
    casilla.innerText='O'

}
//creo que no necesito esto
function arrTablero(){
    let contador=0
    let arrayTablero=[]
    for(let i=0;i<3;i++){
        
        for(let y=0;y<3;y++){
            contador++;
            let casilla=document.getElementById(contador.toString());
            let interior=casilla.innerText;
            arrayTablero[i,contador]=interior;

        }
    }
    console.log(arrayTablero.join("\n"));

}