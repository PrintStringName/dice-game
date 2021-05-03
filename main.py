def Round(Turn: number):
    global Waiting, Die
    Waiting = 1
    basic.show_string("PLAYER" + str(Turn) + "SHAKE!")
    while Waiting == 1:
        if input.is_gesture(Gesture.SHAKE):
            Waiting = 0
    Die = randint(1, 6)
    RollAnimation()
    if Die == 1:
        basic.pause(200)
        for index in range(3):
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    elif Die == 2:
        basic.pause(200)
        for index2 in range(3):
            basic.show_leds("""
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    elif Die == 3:
        basic.pause(200)
        for index3 in range(3):
            basic.show_leds("""
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    elif Die == 4:
        basic.pause(200)
        for index4 in range(3):
            basic.show_leds("""
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    elif Die == 5:
        basic.pause(200)
        for index5 in range(3):
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    elif Die == 6:
        basic.pause(200)
        for index6 in range(3):
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                """)
            basic.pause(200)
            basic.clear_screen()
            basic.pause(200)
    if Turn == 1:
        Die = Player1Roll
    elif Turn == 2:
        Die = Player2Roll
def RollAnimation():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        """)
    basic.show_leds("""
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        """)
    basic.show_leds("""
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        """)
def GameOver():
    global ResetWaiting
    basic.show_string("PRESS A+B TO RESET GAME")
    while ResetWaiting == 1:
        if input.button_is_pressed(Button.AB):
            ResetWaiting = 0
    control.reset()
ResetWaiting = 0
Die = 0
Waiting = 0
Player2Score = 0
Player1Score = 0
Player2Roll = 0
Player1Roll = 0
basic.show_string("PRESS A+B TO START")
while True:
    if input.button_is_pressed(Button.AB):
        while True:
            Round(1)
            Round(2)
            if Player1Roll > Player2Roll:
                Player1Score += 1
                basic.show_string("PLAYER 1 GETS A POINT!")
            elif Player1Roll < Player2Roll:
                Player2Score += 1
                basic.show_string("PLAYER 2 GETS A POINT!")
            elif Player1Roll == Player2Roll:
                basic.show_string("YOU DREW!")
            if Player1Score == 5:
                basic.show_string("PLAYER 1 WINS!")
                GameOver()
            elif Player1Score == 5:
                basic.show_string("PLAYER 2 WINS!")
                GameOver()