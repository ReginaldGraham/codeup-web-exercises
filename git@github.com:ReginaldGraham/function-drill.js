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
// function cube(x){
//     return x*x*x
// }
// console.log(cube(3))
// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(number) {
    var number;
    for (var i = number; i >= 1; i--) {
        if (i * i === number) {
            number = i;
            break;
        }
    }
    return number;
}
console.log(squareRoot(9))
// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(number) {
    var number;
    for (var i = number; i >= 1; i--) {
        if (i * i * i === number) {
            number = i;
            break;
        }
    }
    return number;
}
console.log(cubeRoot(64))
// Write a function named invertSign(number) that returns a negative version of a postive number, a
// positve version of negative, and false for all else.
function invertSign(number){
    return number * -1
}
console.log(invertSign(-2))
// Write a function named degreesToRadians(number)
function degreeToRadians(input){
    return input*3.14/180
}

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

function returnTwo(){
    return 2
}
console.log(returnTwo())

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())
function returnName(input){
    return input;
}
console.log(returnName(`reginald`))


// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))
function addThree(number){
    return number+3
}
console.log(addThree(5))

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())
function sayString(string){
    return string.toString()
}
console.log(sayString(`t`))



// 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

function sayHowdy(){
    return `Howdy!`
}
console.log(sayHowdy())

// write a function, abbrevToDay, that takes in a three-character abbreviation for the day of the week and returns the complete day of the week
// Example: abbrevToDay('mon') returns 'Monday'

function abbrevToDay(input){
    let prop=input.toLowerCase()
    if (prop==`mon`){
        return `Monday`;
    }
    else if (prop==`tue`){
        return `Tuesday`;
    }
    else if (prop==`wed`){
        return `Wednesday`;
    }
    else if (prop==`thr`){
        return `Thursday`;
    }
    else if (prop==`fri`){
        return `Friday`;

    }
    else{
        return `Not a day`
    }
    return input
}

console.log(abbrevToDay(`Fri`))