input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(1000)
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
})
