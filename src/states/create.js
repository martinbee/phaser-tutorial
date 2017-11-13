const GAME_TIME = 10000;
const platforms = [
  { x: 400, y: 400 },
  { x: 300, y: 600 },
  { x: -150, y: 250 },
];

export default function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  this.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background for our game
  this.background = this.add.sprite(0, 0, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  this.platforms = this.add.group();

  //  We will enable physics for any object that is created in this group
  this.platforms.enableBody = true;

  // Here we create the ground.
  this.ground = this.platforms.create(0, this.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  this.ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  this.ground.body.immovable = true;

  //  Now let's create ledges
  platforms.forEach(({ x, y }) => {
    const ledge = this.platforms.create(x, y, 'ground');
    ledge.body.immovable = true;
  });

  // The player and its settings
  this.player = this.add.sprite(32, this.world.height - 150, 'dude');

  //  We need to enable physics on the player
  this.physics.arcade.enable(this.player);

  //  Player physics properties. Give the little guy a slight bounce.
  this.player.body.bounce.y = 0.2;
  this.player.body.gravity.y = 400;
  this.player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  this.player.animations.add('left', [0, 1, 2, 3], 10, true);
  this.player.animations.add('right', [5, 6, 7, 8], 10, true);

  this.stars = this.add.group();
  this.stars.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (let i = 0; i < 12; i += 1) {
    const starXLocation = i * 70;

    this.createStar(starXLocation);
  }

  this.score = 0;
  this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

  this.timer = this.time.create(false);
  this.timer.loop(GAME_TIME, this.endGame, this);
  this.timer.start();
  this.timerText = this.add.text(650, 16, 'Time: 60', { fontSize: '32px', fill: '#000' });
}
