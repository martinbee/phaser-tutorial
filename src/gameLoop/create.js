// this === Phaser.game;
export default function create() {
  const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');

  logo.anchor.setTo(0.5, 0.5);
}
