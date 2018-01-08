
export default class NumberGenerator {
  constructor(min, max, quantity = max) {
    if (max < quantity) {
      throw new Error(`max must be less than quantity. max=${max} quantity=${quantity}`)
    }

    this.min = min;
    this.max = max;
    this.quantity = quantity;
  }

  generateUniqueNumbers() {
    const numbers = new Set();
    while (numbers.size < this.quantity) {
      const n = this.random(this.min, this.max);
      numbers.add(n);
    }
    return numbers;
  }

  random(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  };
}
