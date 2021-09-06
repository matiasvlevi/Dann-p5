// Show in canvas
NetGraph.prototype.show = function show(model) {
  push();

  // Display settings.
  fill(this.theme.colors.background);
  stroke(this.theme.colors.stroke.contour);


  // Renders
  rect(
    this.x,
    this.y,
    this.width,
    this.height
  );

  if (this.model !== undefined) {

    this.graphWeights();
    this.graphLayers();

  }


  pop();
}