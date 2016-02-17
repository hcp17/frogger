// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	this.x=0;
	this.y=20;
	this.width=50;
	this.height=85;

	this.speed=Math.random()*20+32;
	

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite /*= 'images/Star.png'*/;
	
	
};
Enemy.prototype.collisions = function(object) {
    return (this.x < object.x + object.width  && this.x + this.width  > object.x &&
        this.y < object.y + object.height && this.y + this.height > object.y);    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x +=Math.random()*10*dt*this.speed;
	if(this.x >500){
		this.x=0;
		this.y=(Math.random()*29)*8;
	}
	if(this.collisions(player)){
		player.reset();
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
	this.x=250;
	this.y=400;
	this.width=20;
	this.height=50;
	this.score=0;
	this.sprite = 'images/char-boy.png';
};
//Player.prototype = Object.prototype;
Player.prototype.reset=function(){
	this.x=250;
	this.y=400;
	this.score=0;
};
Player.prototype.update = function(dt) {
    if(this.y < 20){
        this.x=250;
		this.y=400;
		this.score+=1;
		if(this.score>=5) prompt("Way to go!!!.New score: "+this.score);
		else prompt("New score: "+this.score);
    }
    //console.log('player x = ', this.x, 'player y = ', this.y);    
};

Player.prototype.handleInput=function(key){
	//console.log("Handle input")
	if(key==='left'){
		if(this.x>50){
			this.x-=50;
		}
		
	}
	else if(key==='right'){
		if(this.x<450){
			this.x+=50;
		}
		
	}
	else if(key==='up'){
		if(this.y<500){
			this.y-=50;
		}
		
	}
	else if(key==='down'){
		if(this.y>50){
			this.y+=50;
		}
		
	}
	
};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
 var e1= new Enemy();
e1.sprite='images/enemy-bug.png';
 var e2=	new Enemy();
e2.sprite='images/Star.png';
 var  e3=	new Enemy();
e3.sprite='images/char-cat-girl.png';
 var  e4=	new Enemy();
e4.sprite='images/char-pink-girl.png';
var allEnemies=[e1, e2, e3, e4 ];
var player=new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
});
