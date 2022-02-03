/*console.log(Math.ceil(Math.random() * 52))
associate each card with a number 1-52
function getHearts() {
    for (i = 0; i < numbers.length; i++)
    console.log(numbers[i] + suits[0])
}
function getDiamonds() {
    for (i = 0; i < numbers.length; i++)
    console.log(numbers[i] + suits[1])
}
function getClubs() {
    for (i = 0; i < numbers.length; i++)
    console.log(numbers[i] + suits[2])
}
function getSpades() {
    for (i = 0; i < numbers.length; i++)
    console.log(numbers[i] + suits[3])
}
// Create array of numbers 1 to 52
*/
var numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
var suits = [" of Hearts", " of Diamonds", " of Clubs", " of Spades"]
function range(start, end) {
    /*return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }*/
  var x = Math.ceil(Math.random() * 52);
  var deck = range(1, x);
  console.log('deck', deck)
  console.log('x', x)
  console.log(Math.ceil(1.1))
  console.log(numbers[0] + suits[1])
  //console.log(deck[Math.ceil(Math.random() * 52])

  