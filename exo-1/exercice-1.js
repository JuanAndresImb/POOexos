 /*EXERCISE 1
TODO: Create a class beverage.
TODO: Create the properties color (string), price (float) and temperature (string) and also foresee a construct.
TODO: Have a default value "cold" in the construct for temperature.

Remember for now we will use properties and methods that can be accessed from everywhere.
TODO: Make a getInfo function which returns "This beverage is <temperature> and <color>."
TODO: Instantiate an object which represents cola. Make sure that the color is set to black, the price equals 2 euro and the temperature to cold automatically
 print the getInfo on the screen.
TODO: Print the temperature on the screen.

USE TYPEHINTING EVERYWHERE!
*/

class Beverage {
    constructor (color, price, temperature = "cold"){
        this.color = color,
        this.price = price,
        this.temperature = temperature;
    }
    getInfo (){
        console.log (`This beverage is ${this.temperature} and ${this.color}`);
    }
}
        
const coca = new Beverage('Black', 2);
coca.getInfo();
console.log(`This beverage is ${coca.temperature}`);



