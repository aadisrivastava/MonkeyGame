var ball,img,paddle,paddleimg;
function preload() {
  /* preload your images here of the ball and the paddle */
  img=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(50,200);
  ball.addImage("bigBall",img);
  ball.velocityX=9;
  paddle=createSprite(350,200);
  paddle.addImage("paddle1",paddleimg);
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=4;
  }
 if(ball.bounceOff(paddle)){
   
    ball.velocityY=-4;
    ball.velocityX=-3;
  }
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  randomVelocity();
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
   
}

