
kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})


let salta = true

loadRoot('img/')
loadSprite('moneda', 'moneda.png')
loadSprite('seta-mala', 'seta-mala.png')
loadSprite('ladrillo', 'ladrillo.png')
loadSprite('mario', 'mario.png')
loadSprite('sorpresa', 'sorpresa.png')
loadSprite('vacio', 'vacio.png')
loadSprite('bloque', 'bloque.png')

scene("game", () => {
    layers(['background', 'obj', 'ui'], 'obj')

    const mapa = [
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '     #  ==     =#=                    ',
        '                                      ',
        '                                      ',
        '                    ^   ^             ',
        '==========================  =========='
    ]

    const confgNivel = {
        width: 20,
        height: 20,
        '=': [sprite('bloque', solid())],
        '#': [sprite('sorpresa', solid())],
        '$': [sprite('moneda', solid(), 'moneda-sorpresa')],
        '}': [sprite('vacio', solid())],
        '^': [sprite('seta-mala', solid())]
    }

    const nivelJuego = addLevel(mapa, confgNivel)

    // const puntuacion = add([
    //     text(score),
    //     pos(30, 6), 
    //     layer('ui'), 
    //     {
    //         value: score, 
    //     }
    // ])

    add([text('level ' + 'test', pos(4,6))])

    const jugador = add([
        sprite('mario'), solid(), 
        pos(30, 0),
        body(),
        
        origin('bot')
    ])


    jugador.action(() => {
        if(jugador.grounded()) {
            salta = false
        }
    })
})

start("game")