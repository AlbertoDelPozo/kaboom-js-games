kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

loadRoot('img/')
loadSprite('moneda', 'moneda.png')
loadSprite('seta-mala', 'seta-mala.png')
loadSprite('ladrillo', 'ladrillo.png')
loadSprite('mario', 'mario.png')
loadSprite('sorpresa', 'sorpresa.png')
loadSprite('vacio', 'vacio.png')

scene("game", () => {
    layers(['background', 'obj', 'ui'], 'obj')

    const mapa = [
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '============  ============  =========='
    ]

    const confgNivel = {
        width: 20,
        height: 20,
        '=': [sprite('ladrillo', solid())]
    }

    const nivelJuego = addLevel(mapa, confgNivel)

})

start("game")