/* EXERCISE 5

Copy the class of exercise 1.

TODO: Change the properties to private.
TODO: Fix the errors without using getter and setter functions.
TODO: Change the price to 3.5 euro and print it also on the screen on a new line.
*/
class Beverage {
  #color;
  #price;
  #temperature;
  constructor(color, price, temperature = "cold") {
    (this.#color = color),
      (this.#price = price),
      (this.#temperature = temperature);
  }
  getInfo() {
    console.log(`This beverage is ${this.#temperature} and ${this.#color}`);
  }
  changePrice(newPrice) {
    this.#price = newPrice;
  }
  printPice() {
    console.log(`This price of this beverage is ${this.#price} euros`);
  }
}

const coca = new Beverage("Black", 2);
coca.getInfo();
coca.changePrice(3.5);
coca.printPice();