NetGraph.prototype.graphWeights = function graphWeights() {

  if (this.model.weights.length > 0) {
    const weights = this.model.weights;
    const layers = this.model.Layers;
    this.theme.spacing.layer = (this.theme.orientation === VERTICAL) ? this.height / (layers.length - 1) : this.width / (layers.length - 1);


    if (this.theme.mode === SQUARE) {
      push();
      if (!this.theme.dynamic) {
        stroke(this.theme.colors.weights.min);
        strokeWeight(this.theme.strokeWeight.weight);
      }
      for (let i = 0; i < weights.length; i++) {
        let div0 = layers[i + 1].size - 1;
        let s0 = 0;
        if (layers[i + 1].size === 1) {
          div0 = layers[i + 1].size + 1;
          s0 = 1;
        }
        let spacing0 = (this.theme.orientation === VERTICAL) ? this.width / div0 : this.height / div0;
        for (let j = s0; j < weights[i].rows + s0; j++) {
          let x = this.theme.orientation === VERTICAL ? (j) * spacing0 : (i + 1) * this.theme.spacing.layer;
          let y = this.theme.orientation === VERTICAL ? (i + 1) * this.theme.spacing.layer : (j) * spacing0;

          let div = layers[i].size - 1;
          let s = 0;
          if (layers[i].size === 1) {
            div = layers[i].size + 1;
            s = 1;
          }
          let spacing = (this.theme.orientation === VERTICAL) ? this.width / div : this.height / div;
          for (let k = s; k < weights[i].cols + s; k++) {
            let ex = this.theme.orientation === VERTICAL ? (k) * spacing : (i) * this.theme.spacing.layer;
            let ey = this.theme.orientation === VERTICAL ? (i) * this.theme.spacing.layer : (k) * spacing;
            if (this.theme.dynamic) {
              let c = NetGraph.colorScale(
                weights[i].matrix[j - s0][k - s],
                this.theme.valueBounds.weight.min,
                this.theme.valueBounds.weight.max,
                this.theme.colors.weights.min,
                this.theme.colors.weights.max,
                this.theme.spread
              );
              stroke(c);
              strokeWeight(this.theme.strokeWeight.weight);
            }
            line(x + this.x, y + this.y, ex + this.x, ey + this.y);
          }
        }
      }
      pop();
    } else if (this.theme.mode === FIXED_UP) {
      push();
      if (!this.theme.dynamic) {
        stroke(this.theme.colors.weights.min);
        strokeWeight(this.theme.strokeWeight.weight);
      }
      for (let i = 0; i < weights.length; i++) {
        let div0 = layers[i + 1].size - 1;
        let s0 = 0;
        if (layers[i + 1].size === 1) {
          div0 = layers[i + 1].size + 1;
          s0 = 1;
        }
        let spacing0 = this.theme.spacing.neuron;
        for (let j = s0; j < weights[i].rows + s0; j++) {
          let x = this.theme.orientation === VERTICAL ? (j) * spacing0 : (i + 1) * this.theme.spacing.layer;
          let y = this.theme.orientation === VERTICAL ? (i + 1) * this.theme.spacing.layer : (j) * spacing0;

          let div = layers[i].size - 1;
          let s = 0;
          if (layers[i].size === 1) {
            div = layers[i].size + 1;
            s = 1;
          }
          let spacing = this.theme.spacing.neuron;
          for (let k = s; k < weights[i].cols + s; k++) {
            let ex = this.theme.orientation === VERTICAL ? (k) * spacing : (i) * this.theme.spacing.layer;
            let ey = this.theme.orientation === VERTICAL ? (i) * this.theme.spacing.layer : (k) * spacing;
            if (this.theme.dynamic) {
              let c = NetGraph.colorScale(
                weights[i].matrix[j - s0][k - s],
                this.theme.valueBounds.weight.min,
                this.theme.valueBounds.weight.max,
                this.theme.colors.weights.min,
                this.theme.colors.weights.max,
                this.theme.spread
              );
              stroke(c);
              strokeWeight(this.theme.strokeWeight.weight);
            }
            line(x + this.x, y + this.y, ex + this.x, ey + this.y);
          }
        }
      }
      pop();
    } else if (this.theme.mode === FIXED) {
      push();
      if (!this.theme.dynamic) {
        stroke(this.theme.colors.weights.min);
        strokeWeight(this.theme.strokeWeight.weight);
      }
      for (let i = 0; i < weights.length; i++) {
        let div0 = layers[i + 1].size - 1;
        let s0 = 0;
        if (layers[i + 1].size === 1) {
          div0 = layers[i + 1].size + 1;
          s0 = 1;
        }
        let spacing0 = this.theme.spacing.neuron;
        let d0 = (this.theme.orientation === VERTICAL) ? 0.5 * ((this.width / spacing0) - layers[i + 1].size) :
          0.5 * ((this.height / spacing0) - layers[i + 1].size);
        for (let j = s0; j < weights[i].rows + s0; j++) {
          let x = this.theme.orientation === VERTICAL ? (j + d0) * spacing0 : (i + 1) * this.theme.spacing.layer;
          let y = this.theme.orientation === VERTICAL ? (i + 1) * this.theme.spacing.layer : (j + d0) * spacing0;

          let div = layers[i].size - 1;
          let s = 0;
          if (layers[i].size === 1) {
            div = layers[i].size + 1;
            s = 1;
          }
          let spacing = this.theme.spacing.neuron;
          let d = (this.theme.orientation === VERTICAL) ? 0.5 * ((this.width / spacing) - layers[i].size) :
            0.5 * ((this.height / spacing) - layers[i].size);
          for (let k = s; k < weights[i].cols + s; k++) {
            let ex = this.theme.orientation === VERTICAL ? (k + d) * spacing : (i) * this.theme.spacing.layer;
            let ey = this.theme.orientation === VERTICAL ? (i) * this.theme.spacing.layer : (k + d) * spacing;
            if (this.theme.dynamic) {
              let c = NetGraph.colorScale(
                weights[i].matrix[j - s0][k - s],
                this.theme.valueBounds.weight.min,
                this.theme.valueBounds.weight.max,
                this.theme.colors.weights.min,
                this.theme.colors.weights.max,
                this.theme.spread
              );
              stroke(c);
              strokeWeight(this.theme.strokeWeight.weight);
            }
            line(x + this.x, y + this.y, ex + this.x, ey + this.y);
          }
        }
      }
      pop();
    }

  } else {
    NetGraph.error(
      'The weights of the model do not exist, try Dann.prototype.makeWeights() to initialize the weights.',
      'NetGraph.prototype.graphWeights'
    );
  }
  return;
}