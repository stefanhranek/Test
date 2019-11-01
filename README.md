# JUMPER
Ironhack - Project One

## Description
Jumper is a game where the player can move left, right and jump. The goal of the game is to move your character to reach the "star" at the top of the map. Along the way, the player can "die" when they collide with obstacles. Upon dying, a "Game Over" screen will appear with the ability to restart game.


## MVP (DOM - CANVAS)
<i>CANVAS</i>, This is a game where the player can move & jump from platform to platform with the ability to complete the game by reaching the top.


## Backlog
<ul>
  <li>Obstacles</li>
  <li>Coins</li>
  <li>Coin counter</li>
  <li>Character sprite</li>
  <li>Star sprite</li>
  <li>Coin sprite</li>
  <li>Sprite "animation"</li>
  <li>Background & atmosphere styling</li>
  <li>Sceen transitions</li>
</ul>

## Data structure

### main.js
```

buildSplashScreen(){
}


buildGameScreen(){
}

buildGameOverScreen(){
}

buildDom() {
}
```

### game.js
```
Game() {
  this.canvas;
}

Game.prototype.startLoop() {
}

Game.prototype.checkCollisions {
}

Game.prototype
```

### player.js
```
Player() {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.direction
  this.speed
}

Player.prototype.movement() {
}

Player.prototype.screenCollision () {
}


```

### enemy.js
```

```


## States y States Transitions
Definition of the different states and their transition (transition functions)
```
- splashScreen
  - buildSplash()
  - addEventListener(startGame)

- gameScreen
  - buildGameScreen()
  

- gameoverScreen
  - buildGameOverScreen()
  - addEventListener(startGame)

- winScreen()
  - buildWinScreen()
  - addEventListener(startGame)

````

## Task
Task definition in order of priority


## Links


### Trello
[Link url](https://trello.com/b/JPkqm7jW/ironhack-project-1-platformer)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
