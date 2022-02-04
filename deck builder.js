var numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
var suits = [" of Hearts", " of Diamonds", " of Clubs", " of Spades"]

function getDeck(numbers, suits) {
    var deck = [];
    for (i in suits) {
        for (j in numbers) {
            deck.push(numbers[j] + suits[i])
        }
    }
    return deck
}

var deck = getDeck(numbers, suits)

//The Fisher-Yates (aka Knuth) Shuffle.

function shuffle(deck) {
  let currentIndex = deck.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
  }
  return deck;
}

shuffle(deck)
console.log(deck[0] + ', ' + deck[1])
