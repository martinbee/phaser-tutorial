const handleMovement = (cursors, player, hitPlatform) => {
  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
    //  Move to the left
    player.body.velocity.x = -150;

    player.animations.play('left');
  } else if (cursors.right.isDown) {
    //  Move to the right
    player.body.velocity.x = 150;

    player.animations.play('right');
  } else {
    //  Stand still
    player.animations.stop();

    player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -350;
  }
};

const collectStar = (player, star, game) => {
  star.kill();

  const updatedScore = game.score + 10;

  game.score = updatedScore;
  game.scoreText.text = `Score: ${updatedScore}`;
};

// this === Phaser.game;
export default function update() {
  const hitPlatform = this.physics.arcade.collide(this.player, this.platforms);

  this.cursors = this.input.keyboard.createCursorKeys();

  handleMovement(this.cursors, this.player, hitPlatform);

  this.physics.arcade.collide(this.stars, this.platforms);
  this.physics.arcade.overlap(this.player, this.stars, (player, star) => collectStar(player, star, this), null, this);
}
