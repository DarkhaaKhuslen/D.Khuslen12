let canvas = document.querySelector('.canvas');
let Point = document.querySelector(".Point");
let count=0

console.log(canvas);
let ctx = canvas.getContext('2d');
console.log(ctx);
let snake = [{x:7,y:8}];
let food = {x:5,y:5};
let dx = 1,dy=0;
function drawFood(){
    ctx.fillStyle="green";
    ctx.fillRect(food.x*20,food.y*20,20,20);
}

function drawSnake(snakeEl){
    snakeEl.forEach(segment => {
        ctx.fillStyle="brown";
        ctx.fillRect(segment.x*20,segment.y*20,20,20);

    });
}
function moveSnake(){
    let head = {x:snake[0].x+dx, y:snake[0].y+dy};
    // unshift()-> massive utga nemne
    // .pop()-> massive utga hasna
    snake.unshift(head); 
    if(head.x==food && head.y==foof.y){
        food = {x:Math.flooor(Math.random()*20),
                y:Math.floor(Math.random()*20)
            
        };
        count++;
	    Point.innerText='Point:'+count;
	    console.log(count);
    }else{
        snake.pop();
    }
    if(head.y==20 || head.x==20 || head.y<0 || head.x<20){
        
    }
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawFood();
    drawSnake(snake);
}
setInterval(moveSnake,200);
// . -> odject ruu . ashiglah handana
document.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if(e.key=="ArrowDown"){
        if(dy!==-1){
            dx=0;
            dy=1;
        }
    }else if(e.key=="ArrowUp"){
        if(dy!==1){
            dx=0
            dy=-1
        }
    }else if(e.key=="ArrowLeft"){
        if(dx!==1){
            dx=-1;
            dy=0;
        }  
    }else if(e.key=="ArrowRight"){
        if(dx!==-1){        
            dx=1;
            dy=0;
        }
    }            
});