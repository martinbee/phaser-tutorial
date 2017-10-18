// this === Phaser.game;
export default function preload() {
  this.load.image('sky', './assets/images/sky.png');
  this.load.image('ground', './assets/images/platform.png');
  this.load.image('star', './assets/images/star.png');
  this.load.spritesheet('dude', './assets/sprites/dude.png', 32, 48);
}
