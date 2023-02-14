const TAMANO_GRID = 21

export function posicionAleatoriaGrid() {
  return {
    x: Math.floor(Math.random() * TAMANO_GRID) + 1,
    y: Math.floor(Math.random() * TAMANO_GRID) + 1
  }
}

export function fueraGrid(position) {
  return (
    position.x < 1 || position.x > TAMANO_GRID ||
    position.y < 1 || position.y > TAMANO_GRID
  )
}
