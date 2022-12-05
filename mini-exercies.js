
// let classMates=[`graham`,`titus`,`leo`]
// console.log(classMates)
// classMates[1]=`justin`
// console.log(classMates)
// const food=[]
// for(i=0;i<10;i+=1){
//     food[i]=prompt(`what you want`)
// }
// console.log(food)
//
// let pies=[`cherry`,`apple`,`key lime`]
// for(let i=pies.length-1; i>=0; i-=1){
//     console.log(pies[i])
// }
//
// pies.forEach(function(element, index, array){
//     console.log(element, index, array)
// })
//
//
// for(i=0;i<classMates.length;i+=1){
//      console.log(classMates[i])
// }
// classMates.forEach(function(element,index,array){
//
// console.log(element, index, array)
// })
// 1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
//
// const foods=
//     [
//     `pie`,
//     `pizza`,
//     `beef`,
//     `tortas`,
//     `tacos`,
//     `chips`,
//     `apple`,
//     `eggs`,
//     `pringles`
//     ,`bacon`
// ];
// for(let i=0; i<foods.length; i+=1){
//     let firstChar=foods[i][0];
//     let vowels=[`a`, `e`, `i`, `o`, `u`];
//     if(vowels.includes(firstChar)){
//     console.log(foods[i]);}
//  }
// 2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
// let numbers = [1, 2, 3, 4, 5, 6,7,8]
// function aboutTime(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             sum = sum + numbers[i];
//         }
//     }
//     return sum;
// }
// console.log(aboutTime(numbers));

// 3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
// otherwise, the function should return the string ‘input num NOT in input array’ (edited)
// function checkIfNumInArray(array,element){
//     if(array==typeof `object` && element % 2===0 ||element % 2!==0){
//      console.log(`good`)
//     }
//     else{
//         console.log(`‘input num NOT in input array’`)
//     }
//                            }
//                            console.log(checkIfNumInArray(numbers,numbers[1]))

//1. Create an array the string elements 'April', 'May', 'June'
//     2. Add 'July' in the correct place of the array
//     3. Add 'March' in the correct place of the array
//     4. July is too hot; remove it from the array.
//     Console log the result and verify you get ['March', 'April', 'May', 'June']
//  */
// var months=[`april`, `may`,`june`,`july`,`august`,`september`]
// months.push(`july`)
// months.unshift(`march`)
// months.pop(`july`)
// console.log(months)
// var slice2=months.slice(3)
// var slice3=months.slice(months.length-2)
// console.log(slice3)
// console.log(slice2)

// mutates Value:
// push
// pop
// shift
// unshift
// sort
// reverse
//
// does not mutate:
// slice
// split
// join

 // 1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
 //    2. Log the alphabetical order of everyone in your row
 //    3. Log the reverse alphabetical order of everyone in your row
 //    4. Log everyone in the row in reverse order
 //    5. Log an array of just the first two students in the row (left to right)
 //    6. Log everyone in the row in a single string separated by spaces
 //    7. Log everyone in the row in a single string separated by underscores

 let row= [`reginald`, `leo`, `randy`,`robert` ,`titus`]
row.sort()
console.log(row)
row.reverse()
console.log(row)
myRow=row.sort().slice(0,2)
console.log(myRow)
let together=myRow.join(`_`)
console.log(together)

