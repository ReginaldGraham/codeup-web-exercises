// TODO CANVAS SETUP
const canvas= document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width=1024;
canvas.height=576;

c.fillRect(0,0,canvas.width,canvas.height)

// TODO PLAYER CREATION
class Sprite{
    constructor(position) {
        this.position=position
    }
myDraw(){
        c.fillStyle='red'
      c.fillRect(this.position.x, this.position.y, 50, 150)
}
}
const player= new Sprite({
    x:0,
    y:0
})
player.myDraw()

const enemy=new Sprite({
    x:400,
    y:0,

})
enemy.myDraw()
console.log(player)

//TODO ANIMATION LOOP
function animate(){
    window.requestAnimationFrame(animate)

}
animate()