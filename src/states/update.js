// this === Phaser.game;
export default function update() {
  const hitPlatform = this.physics.arcade.collide(this.player, this.platforms);

  this.cursors = this.input.keyboard.createCursorKeys();

  this.handleMovement(this.cursors, this.player, hitPlatform);

  this.physics.arcade.collide(this.stars, this.platforms);
  this.physics.arcade.overlap(
    this.player,
    this.stars,
    (player, star) => this.collectStar(player, star, this),
    null,
    this,
  );
}
