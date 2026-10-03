function getCardId(value) {
  let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let suits = ['♣', '♦', '♥', '♠'];
  let deck = [];
  
  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      deck.push(ranks[r] + suits[s]);
    }
  }
  
  let cardIndex = deck.indexOf(value);
  return cardIndex;
}

console.log(getCardId('A♣'));
console.log(getCardId('Q♠'));
