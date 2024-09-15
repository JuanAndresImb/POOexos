
/* EXERCISE 2

TODO: Make class beer that extends from Beverage.
TODO: Create the properties name (string) and alcoholPercentage (float).
TODO: Foresee a construct that's allows us to use all the properties from beverage and that sets the values for name and alcoholpercentage.

Remember for now we will use properties and methods that can be accessed from everywhere.
TODO: Make a getAlcoholPercentage function which returns the alocoholPercentage.
TODO: Instantiate an object which represents Duvel. Make sure that the color is set to blond, the price equals 3.5 euro and the temperature to cold automatically.
TODO: Also the name equal to Duvel and the alcohol percentage to 8,5%
TODO: Print the getAlcoholPercentage 2 times on the screen in two different ways, print the color on the screen and the getInfo.

Make sure that each print is on a different line.
Try to get this error on the screen= Fatal error: Uncaught Error: Call to undefined method Beverage::getAlcoholPercentage() in /var/www/becode/workshop/exercise2.php on line 64
USE TYPEHINTING EVERYWHERE!
*/
class Beverage {
    constructor(color, price, temperature = "cold") {
        this.color = color;
        this.price = price;
        this.temperature = temperature;
    }
    getInfo() {
        console.log(`This beverage is ${this.temperature} and ${this.color}`);
    }
}

class Beer extends Beverage {
    constructor(name, alcoholPercentage, color, price, temperature = "cold") {
        super(color, price, temperature);
        this.name = name;
        this.alcoholPercentage = alcoholPercentage;
    }
    getAlcoholPercentage() {
        console.log(`Le pourcentage d'alcool est de ${this.alcoholPercentage}%`);
    }
}

const Duvel = new Beer("Duvel", 8.5, "blond", 3.5);
Duvel.getAlcoholPercentage();  
Duvel.getAlcoholPercentage();  
Duvel.getInfo();               
console.log(Duvel.color);      

const drink = new Beverage("red",2);
drink.getAlcoholPercentage();
