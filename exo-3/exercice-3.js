
/* EXERCISE 3

TODO: Copy the code of exercise 2 to here and delete everything related to cola.
TODO: Make all properties private.
TODO: Make all the other prints work without error.
TODO: After fixing the errors. Change the color of Duvel to light instead of blond and 
also print this new color on the screen after all the other things that were already printed (to be sure that the color has changed).
TODO: Create a new private method in the Beer class called beerInfo which returns "Hi i'm Duvel and have an alcochol percentage of 8.5 and I have a light color."

Make sure that you use the variables and not just this text line.

TODO: Print this method on the screen on a new line.

USE TYPEHINTING EVERYWHERE!
*/
class Beverage {
    #color;
    #price;
    #temperature;
    constructor(color, price, temperature = "cold") {
        this.#color= color;
        this.#price = price;
        this.#temperature = temperature;
    }
    getInfo() {
        console.log(`This beverage is ${this.#temperature} and ${this.#color}`);
    }
    getColor () {
        return this.#color;
    }
    setColor(newColor){
        this.#color = newColor;
    }
    getPrice (){
        return this.#price;
    }
}



class Beer extends Beverage {
    #name;
    #alcoholPercentage; 
    constructor(name, alcoholPercentage, color, price, temperature = "cold") {
        super(color, price, temperature);
        this.#name = name;
        this.#alcoholPercentage = alcoholPercentage;
    }
    getAlcoholPercentage() {
        console.log(`Le pourcentage d'alcool est de ${this.alcoholPercentage}%`);
    }
    #beerinfo(){
        return `Hi, I'm ${this.#name} and have an alcohol percentage of ${this.#alcoholPercentage} and I have a ${this.getColor()} color. `;
    }
    printBeerInfo(){
        console.log(this.#beerinfo());
    }
}

const Duvel = new Beer("Duvel", 8.5, "blond", 3.5);
Duvel.getAlcoholPercentage();  
Duvel.getAlcoholPercentage();  
Duvel.getInfo();   

Duvel.setColor("light");


console.log(Duvel.getColor());
Duvel.printBeerInfo();


