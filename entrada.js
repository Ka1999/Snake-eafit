let direccionEntrada = {x:0,y:0}
let ultimaDireccionEntrada = {x:0,y:0}

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            if (ultimaDireccionEntrada.y !== 0) break
            direccionEntrada = { x : 0 , y : -1}
            break
        case 'ArrowDown':
            if (ultimaDireccionEntrada.y !== 0) break
            direccionEntrada = { x : 0 , y : 1}
            break
        case 'ArrowLeft':
            if (ultimaDireccionEntrada.x !== 0) break
            direccionEntrada = { x : -1 , y : 0}
            break
        case 'ArrowRight':
            if (ultimaDireccionEntrada.x !== 0) break
            direccionEntrada = { x : 1 , y : 0}
            break
    }
})

export function getDireccionEntrada(){
    ultimaDireccionEntrada = direccionEntrada
    return direccionEntrada;
}