import { sobreSnake, expandirSnake} from "./snake.js";
import { posicionAleatoriaGrid } from "./grid.js";

let comida = getComidaALeatoria()
const RATIO_CRECIMIENTO = 5;

export function actualizar(){
    if(sobreSnake(comida)){
        expandirSnake(RATIO_CRECIMIENTO);
        comida = getComidaALeatoria()
    }
    
}

export function dibujar(tableroJuego){
    const elementoComida = document.createElement('div')
    elementoComida.style.gridRowStart = comida.y
    elementoComida.style.gridColumnStart = comida.x
    elementoComida.classList.add('comida')
    tableroJuego.appendChild(elementoComida);
}

function getComidaALeatoria(){
    let nuevaPosicionComida
    while (nuevaPosicionComida == null || sobreSnake(nuevaPosicionComida)){
        nuevaPosicionComida = posicionAleatoriaGrid()
    }
    return nuevaPosicionComida
}