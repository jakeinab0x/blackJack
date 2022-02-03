const numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
const suits = [" of Hearts", " of Diamonds", " of Clubs", " of Spades"]
function createDeck(numbers, suits) {
    var deck = []
    for (var i in suits) {
        for (var j in numbers) {
            deck.push(numbers[j] + suits[i])
        
        }
    } 
return deck

}

myDeck = createDeck(numbers, suits)
 console.log('myDeck', myDeck)
 console.log(deck)

