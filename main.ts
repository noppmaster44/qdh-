let startzeit = 0
let helber25 = 0
let reihe = 0
let spalte = 0
input.onButtonPressed(Button.A, function () {
    startzeit = 2500
    helber25 = 2500 / 10
    reihe = 0
    spalte = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            basic.pause(helber25)
            led.toggle(spalte, reihe)
            spalte += 1
        }
        reihe += 1
        spalte = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Win")
})
