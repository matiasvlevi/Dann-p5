p5.NetGraph.prototype.graphLayers = function graphLayers() {

  const layers = this.model.Layers;
  this.theme.spacing.layer = (this.theme.orientation === VERTICAL) ? this.height / (layers.length - 1) : this.width / (layers.length - 1);
  stroke(this.theme.colors.stroke.neuron);
  if (this.theme.mode === SQUARE) {

    strokeWeight(this.theme.strokeWeight.neuron);
    for (let i = 0; i < layers.length; i++) {
      let div = layers[i].size - 1;
      let s = 0;
      if (layers[i].size === 1) {
        div = layers[i].size + 1;
        s = 1;
      }
      let spacing = (this.orientation === VERTICAL) ? this.width / div : this.height / div;
      for (let j = s; j < layers[i].size + s; j++) {
        let x = this.theme.orientation === VERTICAL ? j * spacing : i * this.theme.spacing.layer;
        let y = this.theme.orientation === VERTICAL ? i * this.theme.spacing.layer : j * spacing;

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
  } else if (this.theme.mode === FIXED_UP) {
    strokeWeight(this.theme.strokeWeight.neuron);
    for (let i = 0; i < layers.length; i++) {
      let div = layers[i].size - 1;
      let s = 0;
      if (layers[i].size === 1) {
        div = layers[i].size + 1;
        s = 1;
      }
      let spacing = this.theme.spacing.neuron;
      for (let j = s; j < layers[i].size + s; j++) {
        let x = this.theme.orientation === VERTICAL ? j * spacing : i * this.theme.spacing.layer;
        let y = this.theme.orientation === VERTICAL ? i * this.theme.spacing.layer : j * spacing;

        if (this.theme.dynamic) {
          let c = p5.NetGraph.colorScale(
            layers[i].layer.matrix[j - s][0],
            this.theme.valueBounds.neuron.min,
            this.theme.valueBounds.neuron.max,
            this.theme.colors.neuron.min,
            this.theme.colors.neuron.max,
            this.theme.spread
          );
          fill(c);
        } else {
          fill(this.theme.colors.neuron.max);
        }

        ellipse(x + this.x, y + this.y, this.theme.size.neuron, this.theme.size.neuron);
      }
    }
  } else if (this.theme.mode === FIXED) {
    strokeWeight(this.theme.strokeWeight.neuron);
    for (let i = 0; i < layers.length; i++) {
      let div = layers[i].size - 1;
      let s = 0;
      if (layers[i].size === 1) {
        div = layers[i].size + 1;
        s = 1;
      }
      let d = (this.theme.orientation === VERTICAL) ? 0.5 * ((this.width / this.theme.spacing.neuron) - layers[i].size) :
        0.5 * ((this.height / this.theme.spacing.neuron) - layers[i].size);
      for (let j = s; j < layers[i].size + s; j++) {
        let x = this.theme.orientation === VERTICAL ? (j + d) * this.theme.spacing.neuron : i * this.theme.spacing.layer;
        let y = this.theme.orientation === VERTICAL ? i * this.theme.spacing.layer : (j + d) * this.theme.spacing.neuron;

        if (this.theme.dynamic) {
          let c = p5.NetGraph.colorScale(
            layers[i].layer.matrix[j - s][0],
            this.theme.valueBounds.neuron.min,
            this.theme.valueBounds.neuron.max,
            this.theme.colors.neuron.min,
            this.theme.colors.neuron.max,
            this.theme.spread
          );
          fill(c);
        } else {
          fill(this.theme.colors.neuron.max);
        }

        ellipse(x + this.x, y + this.y, this.theme.size.neuron, this.theme.size.neuron);
      }
    }
  }

  return;
}