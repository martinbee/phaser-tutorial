export default function handleMovement() {
  //  Reset the this.players velocity (movement)
  this.player.body.velocity.x = 0;

  if (this.cursors.left.isDown) {
    //  Move to the left
    this.player.body.velocity.x = -150;

    this.player.animations.play('left');
  } else if (this.cursors.right.isDown) {
    //  Move to the right
    this.player.body.velocity.x = 150;

    this.player.animations.play('right');
  } else {
    //  Stand still
    this.player.animations.stop();

    this.player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform) {
    this.player.body.velocity.y = -350;
  }
}
