
let bugs = []; // Declare object
let d;
let totalbugs = 21
let gdiameter = 30

function preload(){
  paper = loadImage("paper.jpg")
  rock = loadImage("rock.jpg")
  scissors = loadImage("scissors.jpg")
}

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
  background('white');
  for(let i=0; i <totalbugs; ++i){
    bugs[i].move();
    bugs[i].display();
    bugs[i].interact();
    bugs[i].update()
  }
  
}

// Jitter class
class Jitter {
  constructor(t) {
    this.pos = createVector(random(width), random(height))
    this.vel = createVector(0,-2)
    this.acc = createVector()
    this.maxspeed = 4
    this.maxforce = 0.01
    
    this.type = t
    this.diameter = gdiameter;
    this.speed = 1
  }

  move() {
    this.pos.x += random(-this.speed, this.speed);
    this.pos.y += random(-this.speed, this.speed);
    
    // for moving across the screen
    if(this.pos.x < -gdiameter/2) {
      this.pos.x = width
    } else if(this.pos.x > width+gdiameter/2){
      this.pos.x = 0
    }
    if(this.pos.y < -gdiameter/2){
      this.pos.y = height
    } else if(this.pos.y > height+gdiameter/2){
      this.pos.y = 0
    }
  }
  
  applyForce(force){
        this.acc.add(force)
    }

  update(){
        this.attract('paper', 'rock')
        this.attract('scissors', 'paper')
        this.attract('rock', 'scissors')
        this.vel.add(this.acc)
        this.vel.limit(this.maxspeed)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }
  
  attract(thistype, targettype){
    if (this.type == thistype){
      let desired = p5.Vector.sub(this.pos, this.pos)
      
      // finding the optimum target to move towards that guy
      for (let i = 0; i < totalbugs; i++) {
         if (bugs[i].type == targettype){
           let target = bugs[i].pos
           let desire = p5.Vector.sub(target, this.pos)
           if(desire.mag() > desired.mag()){
             desired = desire
           }
         }
       }
      let d = desired.mag()
      desired.normalize()
      if(d<100){
        let m = map(d,0,100,0,this.maxspeed)
        desired.mult(m)
      } else {
        desired.mult(this.maxspeed)
      }
    
      let steer = p5.Vector.sub(desired, this.vel)
      steer.limit(this.maxforce)
      this.applyForce(steer)
    }
  }
  
  interact(){
    for (let i = 0; i < totalbugs; i++) {
      d = dist(this.pos.x, this.pos.y, bugs[i].pos.x, bugs[i].pos.y);
      // if (d < this.d && this!=bugs[i] && this.pos.y>height-10) {
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
            this.type = 'scissors'
          }
        }
      }

    }
  }

  display() {
    if(this.type == 'scissors'){
      fill('blue')
      
      image(scissors,this.pos.x-gdiameter/2,this.pos.y-gdiameter/2,gdiameter,gdiameter);
    } else if(this.type == 'rock'){
      fill('red')
      
      image(rock,this.pos.x-gdiameter/2,this.pos.y-gdiameter/2,gdiameter,gdiameter);
    } else if(this.type == 'paper'){
      fill('yellow')
      image(paper,this.pos.x-gdiameter/2,this.pos.y-gdiameter/2,gdiameter,gdiameter);
    }
    //ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    
// image(img2,0,200,400,200);
  }
}