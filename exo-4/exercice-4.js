
/* EXERCISE 4

Copy the code of exercise 3 to here and delete everything related to cola.

TODO: Make all properties protected.
TODO: Make all the other prints work without error without changing the beverage class.
TODO: Don't call getters in de child class.

USE TYPEHINTING EVERYWHERE!
*/

class Beverage {
    _color;
    _price;
    _temperature;
    constructor(color, price, temperature = "cold") {
        this._colorcolor= color;
        this._priceprice = price;
        this._temperature = temperature;
    }
    getInfo() {
        console.log(`This beverage is ${this._temperature} and ${this._color}`);
    }
    getColor () {
        return this._color;
    }
    setColor(newColor){
        this._color = newColor;
    }
    getPrice (){
        return this._price;
    }
}



class Beer extends Beverage {
    _name;
    _alcoholPercentage; 
    constructor(name, alcoholPercentage, color, price, temperature = "cold") {
        super(color, price, temperature);
        this._name = name;
        this._alcoholPercentage = alcoholPercentage;
    }
    getAlcoholPercentage() {
        console.log(`Le pourcentage d'alcool est de ${this._alcoholPercentage}%`);
    }
    #beerinfo(){
        return `Hi, I'm ${this._name} and have an alcohol percentage of ${this._alcoholPercentage} and I have a ${this.getColor()} color. `;
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


