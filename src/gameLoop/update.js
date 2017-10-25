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

const collectStar = (player, star, { sharedState }) => {
  star.kill();

  const { score } = sharedState;
  const updatedScore = score + 10;

  sharedState.score = updatedScore;
  sharedState.scoreText.text = `Score: ${updatedScore}`;
};

// this === Phaser.game;
export default function update() {
  const {
    player,
    platforms,
    stars,
  } = this.sharedState;
  const hitPlatform = this.physics.arcade.collide(player, platforms);

  const cursors = this.input.keyboard.createCursorKeys();

  handleMovement(cursors, player, hitPlatform);

  this.physics.arcade.collide(stars, platforms);
  this.physics.arcade.overlap(player, stars, (player, star) => collectStar(player, star, this), null, this);
}
