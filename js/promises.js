"use strict";

// fetch('https://api.github.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// let userName = document.querySelector("#user");
// let submitButton = document.querySelector("#submitButton");
// //
//     submitButton.addEventListener("click", () => {
// let userInput=userName.value
// console.log(userInput)
// async function getRepos(username) {
//     const response = await fetch(`https://api.github.com/users/${userInput}/events/public`);
//     const data = await response.json();
//     console.log(data[0].created_at);
// }
// getRepos(``)
// });

// async function averageTime(){
//     try{
//         const dataLocation =await fetch(`https://api.github.com/users/ReginaldGraham/events/public`);
//         const data= await dataLocation.json();
//        const averagePush= data.reduce((`total`,`entries`)=> {
//            return total + entries
//         }, 0);
//     }catch (error){
//         console.log(error);
//     }
//
// }
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
// averageTime()
// async function setBackgroundColor(username) {
//     try {
//         const response = await fetch(`../../data/profiles.json/`);
//         const colors = await response.json();
//         const color = colors[username];
//         if (color) {
//             document.body.style.backgroundColor = color;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
// setBackgroundColor(`sandy123`)


// function setBackgroundColor(username) {
//     const colorMap = {
//         'user1': 'blue',
//         'user2': 'red',
//         'user3': 'green'
//     };
//
//     const color = colorMap[username] || 'white';
//     document.body.style.backgroundColor = color;
// }
//
// console.log(setBackgroundColor(`user1`))

//connect to profiles.json and return the data
// async function getProfiles() {
//     try {
//         const response = await fetch(`../../data/profiles.json`)
//         return response.json()
//     } catch (err) {
//         return err
//     }
//
// }
// getProfiles().then((data) => {
//     console.log(data)
// })






