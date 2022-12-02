// var i = 2;
//
// while (i <= 65536) {
//     console.log('while loop iteration #' + i);
//     i*=2;
// }
// let numMultiplyBy=2;
// let counter=0;
// while(counter<16){
//     console.log(numMultiplyBy);
//     numMultiplyBy*=2;
//     counter++;
// }
// for (let i=0, num=2;i<16; i++){
//     console.log(num);
//     num*=2;
// }
// function iceCream() {
//     let stock = Math.round(Math.random() * (100 - 50) + 50);
//     console.log(stock)
//     let i=stock;
//
//     do {
//         let purchase = Math.round(Math.random() * (5 - 1) + 1);
//         console.log(`this is ${purchase}`);
//         let newStock = (i - purchase);
//         i = newStock;
//         // console.log(`${i} this is i after newStock -purchase`);
//         if(purchase>i){
//             console.log(`i dont have enough you want ${purchase} i have ${i}`)
//             // break;
//         }
//         else if(i===0){
//             console.log(`i sold out`)
//         }
//         else {
//             console.log(i)
//         }
//         }
//         while (i >= 5) ;
//
// }
// iceCream();
// let conesToSell=Math.floor(Math.random() * 50) + 50
// do{
//     let conesToBuy=Math.floor(Math.random() * 5) + 1;
//     if(conesToBuy <=conesToSell){
//         console.log(`${conesToBuy} cones sold...`);
//         conesToSell-= conesToBuy;
//     }else{
//         console.log(`Cannot sell you ${conesToBuy} , I only have ${conesToSell}`);
//         console.log(`${conesToSell} cones sold...`);
//         conesToSell-=conesToSell;
//     }
//     if(conesToSell===0){
//         console.log('i sold them all');
//         break;
//
//     }
//
// }while (conesToSell>0)