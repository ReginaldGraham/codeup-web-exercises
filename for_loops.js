// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(x){


     for(let i = 1; i < 11; i++) {
         let problem = x * i;
       let answer = `${x}*${i} = ${problem}`


         console.log(answer)
     }}
console.log(showMultiplicationTable(2))

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function generate() {
        for(let i = 0; i < 10; i++) {
            let formula = Math.random() * (200 - 20) + 20;
            let round=Math.round(formula);
            if(round % 2===0){
                 console.log(`${round} is even`);
            }
            else {  console.log(`${round} is odd`);
            }
        }

        }
//     console.log(generate())
// Create a for loop that uses console.log to create the output shown below.
//     for(let i = 0; i < 10; i++){
//         if(i===1){
//             console.log(`1`)
//         }
//
//         else if(i===2){
//              console.log(i+`${i}`)
//         }
//         else if(i===3){
//             console.log(i+`${i}` +i)
//         }
//         else if(i===4){
//             console.log(i+`${i}`+i+i)
//         }
//         else if(i===5){
//             console.log(i+`${i}`+i+i+i)
//         }
//         else if(i===6){
//             console.log(i+`${i}`+i+i+i+i)
//         }
//         else if(i===7){
//             console.log(i+`${i}`+i+i+i+i+i)
//         }
//        else if(i===8){
//             console.log(i+`${i}`+i+i+i+i+i+i)
//         }
//         else if(i===9){
//             console.log(i+`${i}`+i+i+i+i+i+i+i)
//         }
//         else if(i===10){
//             console.log(i+`${i}`+i+i+i+i+i+i+i+i)
//         }
//
//
//             console.log()
// }
    for (let i = 0; i < 9; i++){
        let number =i + 1;
        let result= `${number}`;
        for(let j=1; j<=i; j++){
            result += number;
        }
            console.log(result);

    }

    for (let i =0; i<9; i++){
        let answer= String(i+1).repeat(i+1)
        console.log(answer)
    }

for(let i = 100; i >=5; i-=5) {
    console.log(i)
}




