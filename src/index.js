import 'pixi';
import 'p2';
import Phaser from 'phaser';

/**
 * Create a new Phaser game instance.
 * And render a single sprite so we make sure it works.
 */

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create, update });

function preload() {
  game.load.image('logo', './assets/images/phaser.png');
}

function create() {
  const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
  logo.anchor.setTo(0.5, 0.5);
}

function update() {
  // ¯ \_(ツ)_/¯
  // "surprise me"
}
