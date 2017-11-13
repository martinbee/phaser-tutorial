// this === Phaser.game;
export default function update() {
  this.hitPlatform = this.physics.arcade.collide(this.player, this.platforms);

  this.cursors = this.input.keyboard.createCursorKeys();

  this.handleMovement();

  this.physics.arcade.collide(this.stars, this.platforms);
  this.physics.arcade.overlap(
    this.player,
    this.stars,
    (player, star) => this.collectStar(player, star, this),
    null,
    this,
  );

  const aliveStars = this.stars.children.filter(({ alive }) => alive);
  const lessThanFiveStarsAlive = aliveStars.length < 5;

  const randomXLocation = Math.floor(Math.random() * 760) + 20;

  if (lessThanFiveStarsAlive) this.createStar(randomXLocation);
}
