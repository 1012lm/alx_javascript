const Square = require('./5-square');

class SquareWithCharPrint extends Square {
  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    let squareStr = '';
    for (let i = 0; i < this.height; i++) {
      squareStr += c.repeat(this.width) + '\n';
    }
    console.log(squareStr.trim());
  }
}

const s1 = new SquareWithCharPrint(5);
s1.charPrint('D');