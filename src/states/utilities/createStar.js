export default function createStar(xLocation) {
  const star = this.stars.create(xLocation, 0, 'star');

  star.body.gravity.y = 6;
  star.body.bounce.y = 0.7 + (Math.random() * 0.2);
}
