
let classMates=[`graham`,`titus`,`leo`]
console.log(classMates)
classMates[1]=`justin`
console.log(classMates)
const food=[]
for(i=0;i<10;i+=1){
    food[i]=prompt(`what you want`)
}
console.log(food)

let pies=[`cherry`,`apple`,`key lime`]
for(let i=pies.length-1; i>=0; i-=1){
    console.log(pies[i])
}

pies.forEach(function(element, index, array){
    console.log(element, index, array)
})


for(i=0;i<classMates.length;i+=1){
     console.log(classMates[i])
}
classMates.forEach(function(element,index,array){

console.log(element, index, array)
})
