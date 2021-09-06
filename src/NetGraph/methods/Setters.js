// Setters
p5.NetGraph.prototype.convertToColor = function convertToColor() {
  this.setColor('background', this.theme.colors.background);
  this.setColor('neuron.min', this.theme.colors.neuron.min);
  this.setColor('neuron.max', this.theme.colors.neuron.max);
  this.setColor('weights.min', this.theme.colors.weights.min);
  this.setColor('weights.max', this.theme.colors.weights.max);
  this.setColor('stroke.contour', this.theme.colors.stroke.contour);
  this.setColor('stroke.neuron', this.theme.colors.stroke.neuron);
  return;
};
p5.NetGraph.prototype.setModel = function setModel(model) {
  this.model = model;
};
p5.NetGraph.prototype.setMode = function setMode(mode) {
  this.theme.mode = mode;
};
p5.NetGraph.prototype.setSpread = function setSpread(spread) {
  this.theme.spread = spread;
};
p5.NetGraph.prototype.setTheme = function setTheme(constant = CLASSIC) {
  if (typeof constant !== 'object') {
    this.theme = themes[constant];
    this.convertToColor();
  } else {
    this.theme = constant;
  }

};
p5.NetGraph.prototype.setPos = function setPos(x, y) {
  this.x = x;
  this.y = y;
};
p5.NetGraph.prototype.setStrokeWeight = function setStrokeWeight(key, w) {
  this.theme.strokeWeight[key] = w;
};
p5.NetGraph.prototype.setSpacing = function setSpacing(s) {
  this.theme.spacing.neuron = s;
};
p5.NetGraph.prototype.setOrientation = function setOrientation(O) {
  this.theme.orientation = O;
};
p5.NetGraph.prototype.neuronSize = function neuronSize(s) {
  this.theme.size.neuron = s;
};

p5.NetGraph.prototype.setColor = function setColor(key, rgba) {
  let col = rgba instanceof p5.Color ? rgba : color.apply(1, rgba);
  // If two keys were specified.
  if (key.indexOf('.') !== -1) {
    key = key.split('.');

    this.theme.colors[key[0]][key[1]] = col;
    return;
  }
  this.theme.colors[key] = col;
  return;
};