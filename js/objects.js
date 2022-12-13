// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // let person={}
    // person.firstName= `Reginald`
    // person.lastName=`Graham`
    // console.log(person.firstName)
    // console.log(person.lastName)
//                 //OR
let person={
        firstName:`Reginald`,
        lastName: `Graham`
}
console.log(person.firstName)
console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello= function() {
    //     return `Hello from ${person.firstName} ${person.lastName}`
    // }
    // console.log(person.sayHello())
            //Or
    person.sayHello= function() {
    return `Hello from ${this.firstName} ${this.lastName}`
}
// console.log(`\n`)
console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
// let newPrice;
// let discount= [];
// let discountAmount;
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
//         shoppers.forEach(function (shopper) {
//              if(shopper.amount>200) {
//             discountAmount = shopper.amount * .12;
//             newPrice = shopper.amount - discountAmount;
//             console.log(discountAmount);
//              console.log(`this is the new price ${newPrice}`);
//             shopper.discountAmount=discountAmount
//              shopper.newPrice=newPrice
//              }
//                  else {
//                      shopper.discountAmount=0
//                     shopper.newPrice=shoppers[0].amount
//                      console.log( shopper.amount)
//                  }
//     });
//         console.log(shoppers)
shoppers.forEach(function(shopper){
    if(shopper.amount > 200){
        let savings= parseFloat(shopper.amount)*.12
        let total=parseFloat(shopper.amount)-(savings);
        console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and received a 12% discount.\n ${shopper.name}'s discounted total is ${total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, with a savings of ${savings.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} `)
    }
    else{
        console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})} and did not receive a discount.`)

    }

})

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

// let book1={}
// book1.title=`hobbit`
// book1.author={}
// book1.author.firstName=`Reginald`
// book1.author.lastName=`Graham`
// let book2={}
// book2.title=`apple`
// book2.author={}
// book2.author.firstName=`John`
// book2.author.lastName=`carey`
// let book3={}
// book3.title=`hamlet`
// book3.author={}
// book3.author.firstName=`sarah`
// book3.author.lastName=`louis`
// let book4={}
// book4.title=`odessy`
// book4.author={}
// book4.author.firstName=`sandy`
// book4.author.lastName=`cheeks`
// let book5={}
// book5.title=`Troy`
// book5.author={}
// book5.author.firstName=`tom`
// book5.author.lastName=`mclane`
// let books=[book1,book2,book3,book4,book5];
// console.log(books[4].author.firstName)
            //OR
let books = [

{
    title:`hobbit`,
    author:
    {
    firstName:`Reginald`,
    lastName:`Graham`
    }
},
{
    title: `apple`,
    author:
    {
    firstName: `John`,
    lastName: `carey`
    }
},
{
    title: `hamlet`,
    author:
    {
    firstName: `sarah`,
    lastName: `louis`
    }
},
{

    title:`odessy`,
    author:
    {
    firstName: `sandy`,
    lastName: `cheeks`
    }
},
{
    title: `Troy`,
    author:
    {
    firstName: `tom`,
    lastName: `mclane`
    }
}
]
console.log(books)
console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for(let i=0;i<books.length;i+=1){
    //  console.log(`title: ${books[i].title}`)
    //     console.log(`Author is: ${books[i].author.firstName} ${books[i].author.lastName}` )
    //
    // }
                     //Using empty string variable to combine function on one console.log
let ConsoleLog=``;
books.forEach(function(book,index){
    let bookNumber=index+1;
    let fullName= `${book.author.firstName} ${book.author.lastName}`;
    // `${book.author.firstName} ${book.author.lastName}`;
    let message= `Book # ${bookNumber}\nTitle:${book.title}\nAuthor: ${fullName} \n---------\n`;

    ConsoleLog+=message;
});
// ConsoleLog+=message
console.log(ConsoleLog);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.



     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    let bookCreated={}
    function createBook(title,name){
        bookCreated.title=title
        bookCreated.author=name
        return bookCreated
}
console.log(createBook(`Troy`,`tom`))

function showBookInfo(input){
    for(let i=0;i<input.length;i+=1){
    }
    return input
}
console.log(showBookInfo(books))
// })();
// let myAuthor = `jason merrel`;
// function createBook(title,author){
//     let authorArray=author.split(' ')
//     let bookObject={
//             title:`hobbit`,
//             author:
//             {
//             firstName:`Reginald`,
//             lastName:`Graham`
//             }
// };
//             return bookObject;
// }
//
// console.log(createBook("park","J,R,P tolkien"))
// let books2=[
//     createBook(`park`,`J,R,P tolkien`),
//     createBook(`The Fellowship of the Ring miller`),
//     createBook(`mice`,`J,R,P tolkien`)  ,
//     createBook(`black hawk`),
// ];