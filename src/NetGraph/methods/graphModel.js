p5.NetGraph.prototype.graphLayers = function graphLayers() {

  const layers = this.model.Layers;
  this.theme.spacing.layer = (this.theme.orientation === VERTICAL) ? this.height / (layers.length - 1) : this.width / (layers.length - 1);
  stroke(this.theme.colors.stroke.neuron);
  strokeWeight(this.theme.strokeWeight.neuron);
  for (let i = 0; i < layers.length; i++) {
    let div = layers[i].size - 1;
    let s = 0;
    if (layers[i].size === 1) {
      div = layers[i].size + 1;
      s = 1;
    }
    let spacing = 0;
    let d = 0;
    if (this.theme.mode === SQUARE) {
      spacing = (this.orientation === VERTICAL) ? this.width / div : this.height / div;
    } else if (this.theme.mode === FIXED) {
      spacing = (this.theme.orientation === VERTICAL) ? 0.5 * ((this.width / this.theme.spacing.neuron) - layers[i].size) :
        0.5 * ((this.height / this.theme.spacing.neuron) - layers[i].size);
    } else if (this.theme.mode === FIXED_UP) {
      spacing = this.theme.spacing.neuron;
    }
    for (let j = s; j < layers[i].size + s; j++) {
      let x = 0,
        y = 0;
      if (this.theme.mode === SQUARE || this.theme.mode === FIXED_UP) {
        x = this.theme.orientation === VERTICAL ? j * spacing : i * this.theme.spacing.layer;
        y = this.theme.orientation === VERTICAL ? i * this.theme.spacing.layer : j * spacing;
      } else if (this.theme.mode === FIXED) {
        x = this.theme.orientation === VERTICAL ? (j + spacing) * this.theme.spacing.neuron : i * this.theme.spacing.layer;
        y = this.theme.orientation === VERTICAL ? i * this.theme.spacing.layer : (j + spacing) * this.theme.spacing.neuron;
      } else {
        p5.NetGraph.error(
          `The mode ${this.theme.mode} is not valid`,
          'p5.NetGraph.prototype.graphModel'
        );
        return;
      }


      if (this.theme.dynamic) {
        let c = p5.NetGraph.colorScale(
          layers[i].layer.matrix[j - s][0],
          this.theme.valueBounds.neuron.min,
          this.theme.valueBounds.neuron.max,
          this.theme.colors.neuron.min,
          this.theme.colors.neuron.max,
          this.theme.spread,
        );
        fill(c);
      } else {
        fill(this.theme.colors.neuron.max);
      }

      ellipse(x + this.x, y + this.y, this.theme.size.neuron, this.theme.size.neuron);
    }
  }
}