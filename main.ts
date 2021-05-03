function Round (Turn: number) {
    Waiting = 1
    basic.showString("PLAYER" + ("" + Turn) + "SHAKE!")
    while (Waiting == 1) {
        if (input.isGesture(Gesture.Shake)) {
            Waiting = 0
        }
    }
    Die = randint(1, 6)
    RollAnimation()
    if (Die == 1) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else if (Die == 2) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else if (Die == 3) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else if (Die == 4) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else if (Die == 5) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else if (Die == 6) {
        basic.clearScreen()
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    }
    if (Turn == 1) {
        Player1Roll = Die
    } else if (Turn == 2) {
        Player2Roll = Die
    }
}
function RollAnimation () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
}
function GameOver () {
    basic.showString("PRESS A+B TO RESET GAME")
    while (ResetWaiting == 1) {
        if (input.buttonIsPressed(Button.AB)) {
            ResetWaiting = 0
        }
    }
    control.reset()
}
let ResetWaiting = 0
let Die = 0
let Waiting = 0
let Player2Score = 0
let Player1Score = 0
let Player2Roll = 0
let Player1Roll = 0
basic.showString("PRESS A+B TO START")
while (true) {
    if (input.buttonIsPressed(Button.AB)) {
        while (true) {
            Round(1)
            Round(2)
            if (Player1Roll > Player2Roll) {
                Player1Score += 1
                basic.showString("PLAYER 1 GETS A POINT!")
            } else if (Player1Roll < Player2Roll) {
                Player2Score += 1
                basic.showString("PLAYER 2 GETS A POINT!")
            } else if (Player1Roll == Player2Roll) {
                basic.showString("YOU DREW!")
            }
            if (Player1Score == 5) {
                basic.showString("PLAYER 1 WINS!")
                GameOver()
            } else if (Player1Score == 5) {
                basic.showString("PLAYER 2 WINS!")
                GameOver()
            }
        }
    }
}
