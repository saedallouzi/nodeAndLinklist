class Node {
    constructor(color, number, nextNode) {
      this.color = color;
      this.number = number;
      this.nextNode = nextNode;
    }
  }
  
  class Stack {
    constructor(limit) {
      this.limit = limit;
      this.size = 0;
      this.topNode = null;
    }
  
    push = (color, number) => {
      if (this.isFull) {
        console.log(`you can't add ${number}`);
      } else {
        const newNode = new Node(color, number);
        newNode.nextNode = this.topNode;
        this.topNode = newNode;
        this.size++;
      };
    };
  
    pop = () => {
      if (this.isEmpty) {
        return ('deck is empty');
      } else {
        const popped = this.topNode;
        this.topNode = popped.nextNode;
        this.size--;
        return [popped.color, popped.number];
      }
    };
  
    get isFull() {
      return this.size === this.limit;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  
    get peek() {
      if (this.isEmpty) console.log('Add cards!');
      else return [this.topNode.number, this.topNode.color];
    }
  }
  
  let deck = [
    [1, 'red'],
    [1, 'blue'],
    [1, 'green'],
    [1, 'yellow'],
    [2, 'red'],
    [2, 'blue'],
    [2, 'green'],
    [2, 'yellow'],
    [3, 'red'],
    [3, 'blue'],
    [3, 'green'],
    [3, 'yellow'],
    [4, 'red'],
    [4, 'blue'],
    [4, 'green'],
    [4, 'yellow'],
    [5, 'red'],
    [5, 'blue'],
    [5, 'green'],
    [5, 'yellow'],
  ];
  let randomizedDeck = deck.sort((a, b) => 0.5 - Math.random());
  let playerOne = [];
  let playerTwo = [];
  const theDeck = new Stack(20);
  
  randomizedDeck.forEach((card) => theDeck.push(card[0], card[1])
  );
  let i = 0;
  while (i < 5) {
    playerOne.push(theDeck.pop());
    playerTwo.push(theDeck.pop());
    i++;
  }
  console.log(`player one cards: ${playerOne}`);
  console.log(`player two cards: ${playerTwo}`);
  console.log(theDeck.peek);