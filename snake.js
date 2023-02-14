
import {getDireccionEntrada } from "./entrada.js"

export const VELOCIDAD_SNAKE = 5
const cuerpoSnake = [{ x: 11, y: 11 }]
let nuevoSegmento = 0

export function actualizar() {
  anadirSegmento()

  const direccionEntrada = getDireccionEntrada()
  for (let i = cuerpoSnake.length - 2; i >= 0; i--) {
    cuerpoSnake[i + 1] = { ...cuerpoSnake[i] }
  }

  cuerpoSnake[0].x += direccionEntrada.x
  cuerpoSnake[0].y += direccionEntrada.y
}

export function dibujar(tableroJuego) {
  cuerpoSnake.forEach(segmento => {
    const elementoSnake = document.createElement('div')
    elementoSnake.style.gridRowStart = segmento.y
    elementoSnake.style.gridColumnStart = segmento.x
    elementoSnake.classList.add('snake')
    tableroJuego.appendChild(elementoSnake)
  })
}

export function expandirSnake(cantidad) {
  nuevoSegmento += cantidad
}

export function sobreSnake(posicion, { ignorarCabeza: ignorarCabeza = false } = {}) {
  return cuerpoSnake.some((segmento, indice) => {
    if (ignorarCabeza && indice === 0) return false
    return posicionesIguales(segmento, posicion)
  })
}

export function getCabezaSnake() {
  return cuerpoSnake[0]
}

export function interseccionSnake() {
  return sobreSnake(cuerpoSnake[0], { ignorarCabeza: true })
}

function posicionesIguales(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function anadirSegmento() {
  for (let i = 0; i < nuevoSegmento; i++) {
    cuerpoSnake.push({ ...cuerpoSnake[cuerpoSnake.length - 1] })
  }

  nuevoSegmento = 0
}