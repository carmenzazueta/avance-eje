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
let select: game.LedSprite = null
let led2 = game.createSprite(randint(1, 5), randint(1, 5))
basic.pause(2000)
basic.forever(function () {
    while (input.isGesture(Gesture.LogoUp)) {
        led2.change(LedSpriteProperty.Y, randint(1, 5))
        led2.change(LedSpriteProperty.X, randint(1, 5))
    }
})
