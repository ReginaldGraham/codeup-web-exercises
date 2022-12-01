// var i = 2;
//
// while (i <= 65536) {
//     console.log('while loop iteration #' + i);
//     i*=2;
// }
function iceCream() {
    let stock = Math.round(Math.random() * (100 - 50) + 50);
    console.log(stock)
    let i=stock;

    do {
        let purchase = Math.round(Math.random() * (5 - 1) + 1);
    console.log(purchase);
        let newStock =(i - purchase);
         i = newStock;
        console.log(`${i} this is i after newStock -purchase`);
    // };


    // console.log(i);
    // console.log(purchase);

} while (i>1);

}
console.log(iceCream());