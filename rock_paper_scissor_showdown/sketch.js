
let bugs = []; // Declare object
let d;
let totalbugs = 30

function setup() {
  createCanvas(710, 400);
  // Create object
  for(let i=0; i <totalbugs; i=i+3){
    bugs[i] = new Jitter('scissors'); 
    bugs[i+1] = new Jitter('rock');
    bugs[i+2] = new Jitter('paper');
  }
  
}

function draw() {
  background(50, 89, 100);
  for(let i=0; i <totalbugs; ++i){
    bugs[i].move();
    bugs[i].display();
    bugs[i].interact();
  }
  
}

// Jitter class
class Jitter {
  constructor(t) {
    this.x = random(width);
    this.y = random(height);
    this.type = t
    this.diameter = 10;
    this.speed = 4;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    
    // for moving across the screen
    if(this.x < 0) {
      this.x = width
    } else if(this.x > width){
      this.x = 0
    }
    if(this.y < 0){
      this.y = height
    } else if(this.y > height){
      this.y = 0
    }
  }
  
  interact(){
    for (let i = 0; i < totalbugs; i++) {
      d = dist(this.x, this.y, bugs[i].x, bugs[i].y);
      // if (d < this.d && this!=bugs[i] && this.y>height-10) {
      if (d < this.diameter && this!=bugs[i] && this.type!=bugs[i].type) {
        // meaning there is a collision
        if(this.type=='scissors'){
          if (bugs[i].type=='paper'){
            bugs[i].type = 'scissors'
          } else if(bugs[i].type == 'rock') {
            this.type = 'rock'
          }
        }
        if(this.type=='rock'){
          if (bugs[i].type=='scissors'){
            bugs[i].type = 'rock'
          } else if(bugs[i].type == 'paper') {
            this.type = 'paper'
          }
        }
        if(this.type=='paper'){
          if (bugs[i].type=='rock'){
            bugs[i].type = 'paper'
          } else if(bugs[i].type == 'scissors') {
            this.type = 'rock'
          }
        }
      }

    }
  }

  display() {
    if(this.type == 'scissors'){
      fill('red')
    } else if(this.type == 'rock'){
      fill('green')
    } else if(this.type == 'paper'){
      fill('blue')
    }
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}