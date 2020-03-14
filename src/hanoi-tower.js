module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let Hanoi = {};
    Hanoi.turns = (2 ** disksNumber) - 1;
    Hanoi.seconds = Hanoi.turns / (turnsSpeed / 3600);
    return Hanoi;
}