// Constructor
NetGraph = function NetGraph(x, y, w, h) {
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
NetGraph.themes = themes;

function createNetGraph(x, y, w, h) {
  return new NetGraph(x, y, w, h);
}