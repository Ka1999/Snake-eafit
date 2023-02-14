import { actualizar as actualizarSnake, dibujar as dibujarSnake, VELOCIDAD_SNAKE,getCabezaSnake,interseccionSnake} from "./snake.js";
import { actualizar as actualizarComida, dibujar as dibujarComida } from './comida.js';
import { fueraGrid } from "./grid.js";

let ultimoTiempoRenderizado = 0;
let juegoTerminado = false;
const tableroJuego = document.getElementById('tablero-juego');

function main(tiempoActual){
    if(juegoTerminado){
        if(confirm("Perdiste, Presiona OK para reiniciar")){
            window.location = './'
        }
        return
    }



    window.requestAnimationFrame(main)
    
    const segundosDesdeUltimoRenderizado = (tiempoActual - ultimoTiempoRenderizado)/1000;

    if(segundosDesdeUltimoRenderizado < 1/VELOCIDAD_SNAKE){
        return;
    }
    
    

    ultimoTiempoRenderizado = tiempoActual;
    actualizar();
    dibujar();
}


function actualizar(){
    actualizarSnake();
    actualizarComida();
    verificarMuerte()
}

function dibujar(){
    tableroJuego.innerHTML = ''
    dibujarSnake(tableroJuego);
    dibujarComida(tableroJuego);
}


function verificarMuerte(){
    juegoTerminado = fueraGrid(getCabezaSnake()) || interseccionSnake()
}

window.requestAnimationFrame(main);