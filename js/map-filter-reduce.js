"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let usersTrilingual=users.filter((user)=>{
    return user.languages.length>=3;
});
// console.log(usersTrilingual);
let usersEmail=users.map((user)=>{
    return user.email+``
})


let userExperience=users.reduce((years,people)=>{
return years+people.yearsOfExperience/5;
},0);



// let userLongEmail=users.reduce((longest, emails)=>{
//
// },0);
let longestEmail = users.reduce((longest, user)=> {
    return user.email.length > longest.length ? user.email : longest;
}, "");


let userName = users.reduce((list,name)=>{
return `${list} ${name.name},`;
}, "Your instructors are:").slice(0, -1) + ".";

console.log(userName)
let nameString = users.reduce((list, user) => {
    return `${list} ${user.name},`;
} , "Your instructors are:").slice(0, -1) + ".";
console.log(nameString);
