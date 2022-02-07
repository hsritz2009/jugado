let jugada = 0
input.onGesture(Gesture.Shake, function () {
    jugada = randint(1, 3)
    if (jugada == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
    } else if (jugada == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
	
})
