function areaOfSquare(side) {
  return side * side;
}
function areaOfRectangle(l, b) {
  return l * b;
}
function areaOfCircle(r) {
  return 3.14 * r * r;
}
module.exports = {
  areaOfCircle: areaOfCircle,
  areaOfRectangle: areaOfRectangle,
  areaOfSquare: areaOfSquare,
};
