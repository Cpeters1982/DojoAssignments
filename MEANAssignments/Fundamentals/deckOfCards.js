function Card(suit, val){
  this.suit = suit
  this.val = val
}

function Deck(){
  this.cards = []
  this.reset()
}

Deck.prototype.reset = function(){
  var suits = "HCSD"
  var vals = "A234567890JQK"

  this.cards = []

  for (var x = 0; x < suits.length; x++){
    for (var y = 0; y < vals.length; y++){
      this.cards.push(vals[y] == "0" ? new Card(suits[x], '1' + vals[y]) : new Card(suits[x], vals[y]))
    }
  }

  return this

}

Deck.prototype.shuffle = function(){
  var currentIndex = this.cards.length, temporaryCardHolder, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryCardHolder = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryCardHolder;
  }

  return this;

}

Deck.prototype.deal = function(){
  this.shuffle()
  return this.cards.pop()
}


function Player(name){
  this.name = name
  this.hand = []
}

Player.prototype.takeCard(deck){
  this.hand.push(deck.deal())
}

Player.prototype.discard(){
  this.hand.pop()
}





var newDeck = new Deck()

console.log(newDeck.cards)

newDeck.shuffle()

console.log(newDeck.cards)
