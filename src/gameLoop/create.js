// this === Phaser.game;
export default function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  this.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background for our game
  this.add.sprite(0, 0, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  const platforms = this.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;

  // Here we create the ground.
  const ground = platforms.create(0, this.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create two ledges
  const ledge1 = platforms.create(400, 400, 'ground');

  ledge1.body.immovable = true;

  const ledge2 = platforms.create(-150, 250, 'ground');

  ledge2.body.immovable = true;

  // The player and its settings
  const player = this.add.sprite(32, this.world.height - 150, 'dude');

  //  We need to enable physics on the player
  this.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
  console.log(this);
}
