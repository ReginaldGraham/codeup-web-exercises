"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
sayHello()
function sayHello(name) {
    return ('hello ' + name);
}
 console.log(sayHello('joe'));
function sayHello(name){
    let message = `Hello, `+ name + ` !`;
    return message;
}
console.log(sayHello(`Codeup`));
const sayHello=(name)=>{
    let message =`Hello ${name} !`;
    return message ;
}
console.log(sayHello(`Codeup`))
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

console.log(sayHello("Reggie Graham"));
let helloMessage = sayHello("Reggie Graham");

console.log(helloMessage);

let helloMessage=sayHello(`Reginald`)
console.log(helloMessage)
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = ('Reggie Graham');
console.log(sayHello(myName));
let myName=`Reggie`;
console.log(sayHello(myName))



  /**Don't modify the following line, it generates a random number between 1 and 3
  and stores it in a variable named random*/
  var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    let answer=number==2;
    return answer;
}
let isTwoAnswer=isTwo(random);
console.log(isTwoAnswer)
console.log(random)
 function isTwo(x) {
     return x === 2;
 }

 console.log(isTwo(3));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
 function calculateTip (x) {
     return x*.20
 }


 console.log(calculateTip(10))
let tipAnswer=calculateTip(200,20);
console.log(tipAnswer);
function calculateTip(total, tip) {
    let tipFormatted = tip / 100;
     tipFormatted= parseFloat(tipFormatted);
    let answer= total * tipFormatted;
    return answer;
}
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
 calculateTip()
 function calculateTip () {
     let tab = prompt( 'how much you owe') ;
     let tipPercent =prompt( 'what tip percent would you like to pay');
     let total =tab * tipPercent ;
     alert('you owe for the tip '+ total) }
let bill=prompt('what is the bill total')
let tip=prompt('how much for the tip')
alert(calculateTip(bill,tip))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
var oringinalPrice=100;
var discountPercent= 20;
let appliedDiscount=applyDiscount(oringinalPrice,discountPercent);
console.log(appliedDiscount);
function applyDiscount(price,discount){
    let discountFormatted = discount / 100;
    let result= (1- discountFormatted) * price;
    return result.toFixed(2);
}

 function applyDiscount(price, discountPercent) {
     return price - price * discountPercent;
 }
 console.log(applyDiscount(45.99, .12));


