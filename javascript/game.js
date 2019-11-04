'use strict'

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.coins = 0;
    this.walls = null;
}

// Create the canvas, a `player`, and start the canvas loop

Game.prototype.start = function() {

    // Here... get canvas element, create ctx, save canvas & ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // save reference to coins collected
    this.coinsElement = this.gameScreen.querySelector('coins'); // ('.coins .value') in code-along

    // Setting the canvas (ctx) to be the same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth; // look back at 'offset' functionality
    this.containerHeight = this.canvasContainer.offsetHeight; // same as above
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    //draw walls
    this.floor = new Floor(this.canvas); // *************************************** edit/remove

    // Creating new player for the start of the game
    this.player = new Player(this.canvas, 1);

    // Add event listener for keydown movements 
    

    this.handleKeyDown = function(event) {
    
        if (event.keyCode === 38) {
            console.log('UP');
            this.player.movePlayer('up');   // change movement to jump
            } 
        else if (event.key === 'ArrowDown') {
            console.log('DOWN');
            this.player.movePlayer('down');   // disable once gravity is in place
            }
        else if (event.keyCode === 37) {
            console.log('LEFT');
            this.player.movePlayer('left');
        }
        else if (event.keyCode === 39) {
            console.log('RIGHT');
            this.player.movePlayer('right');
        }
        };

        this.handleKeyUp = function(event) {
    
            if (event.keyCode === 38) {
                console.log('UP Release');
                this.player.movement('up');  // change movement to jump
                } 
            else if (event.key === 'ArrowDown Release') {
                console.log('DOWN Release');
                this.player.movement('down');  // disregard down movement for now
                }
            else if (event.keyCode === 37) {
                console.log('LEFT Release');   
                this.player.moveLeft = true;
            }
            else if (event.keyCode === 39) {
                console.log('RIGHT Release');
                this.player.moveRight = true;
            }
            };


        document.body.addEventListener(
            'keydown', 
            this.handleKeyDown.bind(this)
        );

    //}

    // Start the game loop

    this.startLoop();
}

Game.prototype.startLoop = function() {
    var loop = function() {
        console.log('in loop');


        // EVERYTHING HAPPENS HERE !!!!!

        // 1. UPDATE THE STATE OF PLAYER AND ENEMIES


    // 0. Our player was already created - via `game.start()`


    // 1. Create new enemies randomly
        if (Math.random() > 0.98) {
        var randomX = this.canvas.width * Math.random();    // later change randomY to randomX
        this.enemies.push(new Enemy(this.canvas, randomX, 5));  // later change randomY to randomX
        // var newEnemy = new Enemy(this.canvas, randomY, 1); used that previously instead of above
        }

    // 2. Check if player had hit any enemy (check all enemies)
        this.checkCollisions();


    // 3. Check if player is going off the screen
            // & check object collision
            this.player.handleFloorCollision();
            this.player.handleScreenCollision();

        
    // 4. Move existing enemies
    // 5. Check if any enemy is going of the screen
        this.enemies = this.enemies.filter(function(enemy) {
            enemy.updatePosition();
            return enemy.isInsideScreen();
        });


// 2. CLEAR THE CANVAS
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


// 3. UPDATE THE CANVAS
    // Draw the walls
        this.floor.draw();

    // Draw the player
        this.player.draw();


    // Draw the enemies
    this.enemies.forEach(function(enemy) {  // in code-along src arg is item & item.draw below
        enemy.draw();
        });


// 4. TERMINATE LOOP IF GAME IS OVER
        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }

        //  5. Update Game data/stats
        this.updateGameStats();	
        // ************************************update this later


    }.bind(this);

    window.requestAnimationFrame(loop);
}

    // further inspect the above startLoop function
    // i don't quite understand it at the moment


Game.prototype.checkCollisions = function() {

    this.enemies.forEach( function(enemy) {
        if ( this.player.didCollide(enemy) ) {

            this.player.removeLife();
            console.log('lives', this.player.lives);

            // move enemy off the screen to the bottom
            enemy.y = this.canvas.height + enemy.size; // change to bottom of canvas **

            if (this.player.lives === 0) {
                this.gameOver();
            }
        }
    }, this);

}

Game.prototype.updateGameStats = function() {
    // change to fit my game ************************************
    // coins, not score ~ lives don't matter
    this.coins += 1;
    // this.coinsElement.innerHTML = this.coins;
}

Game.prototype.passGameOverCallback = function(gameOver) {
    // need to understand this better
    this.onGameOverCallback = gameOver;
}


Game.prototype.gameOver = function() {
    // `gameIsOver = true` stops the loop
    this.gameIsOver = true;

    console.log('GAME OVER');

    // Call the gameOver function from `main` to show the Game Over Screen
    this.onGameOverCallback();
}

Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();   
    // remove() is the DOM method which removes the DOM Node 
}
































/*

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};

*/