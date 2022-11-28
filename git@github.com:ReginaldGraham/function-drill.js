"use strict";
// Functions using conditionals but not loops or arrays:
//     Make a function named isOdd(number)
// function isOdd(number){
//     if(number % 2 !==0){
//  return number + ` is odd`;
// }
// else {
//     return number + ` is even`;
// }
// }
// console.log(isOdd(3))
// Make a function named isEven(number)
// function isEven(number){
//     return number % 2 ===0 ;
//
// }
// console.log(isEven(17))
// Make a function named identity(input) that returns the input exactly
// as provided.
// function identify(x){
//
//     return x
// }
// console.log(identify(`Reginald`))
//     Make a function named isFive(input)
// function isFive(number){
//     return number===5
// }
// console.log(isFive(5))
// Make a function named addFive(input) that adds five to some input.
// function addFive(number){
//     return number + 5
// }
// console.log(addFive(8))
//     Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(number){
//     return number % 5===0
// }
// console.log(isMultipleOfFive(15))
// Make a function named isThree(input)
// function isThree(number){
//     return number===3
// }
// console.log(isThree(3))
// Make a function named isMultipleOfThree(input)
// function IsMultipleOfThree(number){
//     return number % 3===0
// }
// console.log(IsMultipleOfThree(6))

// Make a function named isMultipleOfThreeAndFive(input)
// function IsMultipleOfThreeAndFive(number){
//     return number % 3===0 && number % 5===0
// }
// console.log(IsMultipleOfThreeAndFive(12))
// Make a function named isMultipleOf(target, n) which checks if target
//     is evenly divisible by n
// function isMultipleOf(y,n){
//     return y % n===0
// }
// console.log(isMultipleOf(18,2))
// Make a function named isTrue(boolean)
// function isTrue(boolean){
//     return(boolean)
// }
// console.log(isTrue(true))
// Make a function named isFalse(boolean)
// function isFalse(boolean){
//
// }
// Make a function named isTruthy(input), remember that values other than
// true will behave like true
// function isTruthy(x){
//     return x=true;
// }
// console.log(isTruthy(`efef`))
// Make a function named isFalsy(input), remember that values other than
// false behave like false
// function isFalsey(x){
//     return x=false;
// }
// console.log(isFalsey(`rfverv`))
// Make a function named isVowel(letter)
// function isVowel(x){
//     return x===`a`||x===`e`||x===`i`||x===`u`||x===`y`;
// }
// console.log(isVowel(`h`))
// Make a function named isConsonant(letter)
// function isConsonant(x){
//     return x!==`a`&& x!==`e`&& x!==`i`&& x!==`o`&& x!==`u`
// }
// console.log(isConsonant(`w`))
// Make a function named isCapital(letter)
// function isCapital(x){
//     return x.toUpperCase()
// }
// console.log(isCapital(`hey`))
// Make a function named isLowerCase(letter)
// function isLowerCase(x){
//     return x.toLowerCase()
// }
// console.log(isLowerCase(`HEY`))
// Make a function named hasLowerCase(string) that returns if a string
// has any lower cased letter
// function hasLowerCase(x){
//     if (x === x.toUpperCase()){
//         console.log(`It doesn't contain any lowercase`);
//     }
//     else { console.log(`It has lowercase`);
//     }
// }
// console.log(hasLowerCase(`HyY`))
// Make a function named isSpace(letter) that returns if a character is a space character
// function isSpace(x){
//     return x ===` `
// }
// console.log(isSpace(` `))

// Make a function named isZero(number)
// function isZero(x){
//     return x===0
// }
// console.log(isZero(0))
// Make a function named notZero(input) that returns true if the input is not zero
// function notZero(x){
//    return x!==0
// }
// console.log(notZero(1))
// Write a function named lowerCase(string)
// function LowerCase(string){
//     return string.toLowerCase()
// }
// console.log(LowerCase(`I'M TIRED`))
// Write a function named double(n) that returns a number times two
// function double(x){
//     return x*2
// }
// console.log(double(3))
// Write a function named triple(n) that returns a number times 3
// function triple(x){
//     return x*3
// }
// console.log(triple(3))
// // Write a function named quadruple(n) that returns a number times 4
// function quadruple(x){
//     return x*4
// }
// console.log(quadruple(3))
// Write a function named half(n) that returns 1/2 of the provided input
// function half(x){
//     return x/2
// }
// console.log(half(4))
// Write a function named subtract(a, b) that returns a minus b
// function subtract(x,b){
//     return x-b
// }
// console.log(subtract(3,5))
// Write a function named multiply(a, b) that returns the product of a times b
// function multiply(x,b){
//     return x*b
// }
// console.log(multiply(3,5))
// Write a function named divide(a, b) that returns a divided by b
// function divide(x,b){
//     return x/b
// }
// console.log(divide(6,3))
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// function remainder(x,b){
//     return x%b
// }
// console.log(remainder(7,3))
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// function remainder(x,b){
//     return x%b
// }
// console.log(remainder(7,3))
// Write a function named cube(n) that returns n * n * n
function cube(x){
    return x*x*x
}
console.log(cube(3))
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a
// positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides
// the die should have. Generate a random number between 1 up to and including the number of sides.