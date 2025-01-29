let finPartida=false;
let ganador=false;
let jugador1;
let jugador2;
let casillaJug1;
let casillaJug2;
let finalTiempo=false;
let casillaOcupada=true;
let arrayTablero=[['-','-','-'],['-','-','-'],['-','-','-']];
while(finPartida){
    //Jugador 1:

        //pedir lugar casilla
        while(casillaOcupada){
            //pedir lugar casilla

        }
        console.log()//ficha en el tablero
        //comprobar ganador
        if(ganador){break}

    //Jugador 2:

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
function xTablero(e){
    const casilla=document.getElementById(e.toString());
    casilla.innerText='X'

}
function oTablero(e){
    const casilla=document.getElementById(e.toString());
    casilla.innerText='O'

}