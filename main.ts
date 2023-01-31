function update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("P1 score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("P2 score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    P1 += 1
    Rounds += 1
    update_score_board()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    update_score_board()
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
    Rounds += 1
    update_score_board()
})
input.onGesture(Gesture.Shake, function () {
    reset()
    update_score_board()
})
function reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("shall we play a game?")
    basic.pause(2000)
    update_score_board()
}
let Rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
reset()
