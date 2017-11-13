export default function collectStar(player, star, game) {
  star.kill();

  const updatedScore = game.score + 10;

  game.score = updatedScore;
  game.scoreText.text = `Score: ${updatedScore}`;
}
