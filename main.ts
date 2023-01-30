input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    reset()
}
OLED.init(128, 64)
let P1 = 0
let P2 = 0
let Ties = 0
let Rounds = 0
OLED.writeStringNewLine("shall we play a game?")
basic.pause(2000)
OLED.clear()
OLED.writeStringNewLine("P1 score:" + P1)
OLED.newLine()
OLED.writeStringNewLine("P2 score:" + P2)
OLED.newLine()
OLED.writeStringNewLine("Ties:" + Ties)
OLED.newLine()
OLED.writeStringNewLine("Rounds:" + Rounds)
