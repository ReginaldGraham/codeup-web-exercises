// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
// let beverage1={
//
//      brandName: `coke`,
//      type: `soda`,
//      volumeInLiters:`12 fl oz`,
//      priceInCents: `100`,
//      expirationDate:`2024`,
//      datesOfPreviousSips:[`dec 3`, `dec 1`, `nov 30`],
//      isOpen:`yes`
// }
// console.log(beverage1)
// let beverage2={}
//
// beverage2.brandName=`pepsi`,
//     beverage2.type= `soda`,
//     beverage2.volumeInLiters=`12 fl oz`,
//     beverage2.priceInCents= `110`,
//     beverage2.expirationDate=`2025`,
//     beverage2.datesOfPreviousSips=[`dec 2`, `nov 29`, `nov 25`],
//     beverage2.isOpen=`yes`
// console.log(beverage2)
//
//
// const pet = {
//     name: 'Bowser',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//         'Bowser Boy',
//         'Bowser Man',
//         'Bowser Buddy',
//         'Puggle Wuggle Boy'
//     ],
//     vitals: [
//          {
//         averageTempDegF: 97,
//         averageRestingHeartRate: 80,
//         isHungry: true
//
//
//     },
//          {
//          averageTempDegF: 101,
//           averageRestingHeartRate: 70,
//          isHungry: true
//          },
//          {averageTempDegF: 105,
//           averageRestingHeartRate: 79,
//           isHungry: true
//          }
//
//     ]
// };
// console.log(pet.vitals[1].averageRestingHeartRate)
//
// const pets = [
//     {
//         givenName: 'Spot',
//         isDog: true
//     },
//     {
//         givenName: 'Max',
//         isDog: false
//     },
//     {
//         givenName: 'Goldy',
//         isDog: false
//     }
// ];
// pets.forEach(function(pets){
//     console.log(pets.givenName);
// })
//
// for (let i=0;i<pets.length;i+=1){
// console.log(pets[i].givenName);
// }
//
// for (let i=0;i<pets.length;i+=1){
//     pets[i].givenName=`Smith`;
//     console.log(pets[i])
// }
// const users = [
//     {
//         givenName: `Sam`,
//     age: 21
//     },
//     {
//     givenName: `Cathy`,
//     age: 34
//     },
//     {
//     givenName: `Karen`,
//     age: 43
//     }
// ]   ;
// console.log(`sam`)
// console.log(`cathy`)
// console.log(`karen`)
// let name2=''
"use strict";


                                               // let names = '';
                                               // users.forEach(function(user) {
                                              	// names += user.givenName + ' ';
                                               // });
                                               // console.log(names.trim())
                                               // trim gets rid of empty spaces at begining and end of string
// let emptyArr= {}
// for (let i=0;i<users.length;i+=1){
//     let result=users[i].givenName;
//     emptyArr.push(result);
//     users[i].age+=1
//     console.log(users[i])
//     console.log(result)
// }
// console.log(emptyArr.join(' '));
//
// let emptyArr = [];
// for (let i = 0; i < users.length; i +=1) {
// let result = users[i].givenName;
// emptyArr.push(result);
// }

// for (let i=0; i<users.length; i+=1){
//     console.log(users[i].givenName);
// }
// let names= ``;
// users.forEach(function(user) {
//     names += console.log(users[i].givenName);
// });
// console.log(names, `Sam Cathy karen`)
//
// // change all users names
//
// users.forEach(function(user,){
//     user.givenName= ~`John Doe`;
// });
// console.log(users);
//
// // add plus 1 to all
//
// users.forEach(function( user){
//     user.age+1
// });
// console.logl()
//
// users.forEach(function(user){
//    console.log(`user:${user.givenName}) | age: ${user.age}`)
// });
//
//    users.forEach(function(user){
//        if(user.age>30){
//            console.log(user.givenName);
//        } else{
//            console.log(`Hello younfer person...` + user.givenName);
//        }
//    });

   //create longest name variable
// loop through users and reassign the name of the current if longer than longest name


// let longestName= ``;
// users.forEach(function(user){
//     if (user.givenName.length> longestName.length) {
//         longestName = user.givenName;
//     }
// });
// console.log(longestName);

//
// console.log(emptyArr.join(' ')); /*<---use join instead of toString and replaceAll.*/
// let arrToString = emptyArr.toString(""); /*<----Don't use this one*/
// console.log(arrToString.replaceAll(',',' '));
// 0. Log each given name                      ,
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?
//
// ================================= WARM UP
//
// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];

// // findAverageDogAge(pets) // returns 7.5
// let petTotal;
// function easy(){
// for (let i = 0; i < pets.length; i +=1) {
//  petTotal+=pets.age[i];
// return petTotal/=pets.length
// }
// }
// console.log(easy())

// let total=0;
// let dogCount=0;
// function findAverageDogAge(pets){
//     pets.forEach((pet)=>{
//         if(pet.type ===`Dog`){
//             total += pet.age;
//             dogCount++;
//         }
//     });
//     return total/dogCount;
// }
// console.log(findAverageDogAge(pets));
//
// function findAverageDogAge(pets){
// for(let i =0; i<pets.length; i+=1){
//     if(pets[i].type ==='Dog'){
//         total+=pets[i].age;
//         dogCount++;
//     }
// }
// return total/ dogCount
// }
// console.log(findAverageDogAge(pets))

// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

let total=0;
let noFish=[];
function returnPetsWithNoFish(pets){
    pets.forEach((pet)=>{
        if(pet.type !==`Fish`){

            noFish.push(pet)
        }
    });
    return noFish
}
console.log(returnPetsWithNoFish(pets));

function returnPetsWithNoFish2(pets){
pets.forEach(function(pet){
    if (pet.type !==`Fish`) {
        noFish.push(pet)
    }
});
return noFish
}
console.log(returnPetsWithNoFish2(pets))
























