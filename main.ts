let select: game.LedSprite = null
let led2: game.LedSprite = null
let tiempo = 0
input.onButtonPressed(Button.A, function () {
    select.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    select.move(-1)
})
input.onButtonPressed(Button.B, function () {
    select.move(-1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    select.move(1)
})
basic.forever(function () {
    led2 = game.createSprite(randint(1, 5), randint(1, 5))
    basic.pause(200)
    led2.delete()
    basic.clearScreen()
    tiempo = 200
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(tiempo)
                led.unplot(x, y)
            }
        }
    }
})
