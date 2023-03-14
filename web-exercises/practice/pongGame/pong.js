// TODO UPDATE LOOP
import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball= new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElement= document.getElementById("player-score");
const computerScoreElement= document.getElementById("computer-score");
let lastTime;


// TODO Difficulty Prompt

function difficulty(select){
const selectedValue = window.prompt(`Please select an difficulty level:easy, normal, hard?`);
    select=selectedValue.toLowerCase();
    if(select==='hard'){
        console.log("hard")
        window.requestAnimationFrame(update)
    }else if(select==='normal'){
        console.log("normal")
       window.requestAnimationFrame(update)

    }else if(select==='easy'){
        console.log("easy")
        window.requestAnimationFrame(update)
    }
    else if( select !== "easy" || select !== "normal"|| select !== "hard"){
        alert("please enter a valid response")
        return difficulty();
    }
}
difficulty()

function update(time){
if(lastTime != null){
    const delta= time-lastTime
// TODO update code
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
    computerPaddle.update(delta, ball.y)
    const hue= parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)
    if(isLose())handleLose()
}
lastTime=time
    window.requestAnimationFrame(update)
}
function isLose(){
    const rect = ball.rect()
    return rect.right>= window.innerWidth||rect.left<=0
}
function handleLose(){
    const rect = ball.rect()
    if(rect.right >=window.innerWidth){
        playerScoreElement.textContent=parseInt(playerScoreElement.textContent)+ 1
    }else {computerScoreElement.textContent= parseInt(computerScoreElement.textContent)+1

    }
    ball.reset()
    computerPaddle.reset()

}
document.addEventListener("mousemove", e=>{
    playerPaddle.position=(e.y/ window.innerHeight)*100
} );

// window.requestAnimationFrame(update)
