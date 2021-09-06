// Constructor
p5.NetGraph = function NetGraph(x, y, w, h) {
  // Main properties
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.model = undefined;

  // Display properties
  this.theme = JSON.parse(JSON.stringify(themes[CLASSIC]));
  this.convertToColor();
};
p5.NetGraph.themes = themes;

function createNetGraph(x, y, w, h) {
  return new p5.NetGraph(x, y, w, h);
}