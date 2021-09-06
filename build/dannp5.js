// Constants
// ---


// Orientation
const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';
// Modes
const SQUARE = 'square';
const FIXED = 'fixed';
const FIXED_UP = 'fixed_up';
const FIXED_DOWN = 'fixed_down';
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
NetGraph.error = function error(msg, func) {
  console.error(msg + '\n ' + 'Stopped p5js "draw" loop \n > ' + func);
  console.warn();
  noLoop();
  return;
}
NetGraph.colorScale = function colorScale(i, smallBound, largeBound, min, max, spread) {
  let p = spread;
  let div = (Math.abs(largeBound - smallBound)) * p;
  let mred = min._getRed();
  let r = ((max._getRed() - mred) / div) * (i + largeBound - 1) + mred;
  let mgreen = min._getGreen();
  let g = ((max._getGreen() - mgreen) / div) * (i + largeBound - 1) + mgreen;
  let mblue = min._getBlue();
  let b = ((max._getBlue() - mblue) / div * 2) * (i + largeBound - 1) + mblue;
  let malpha = min._getAlpha();
  let a = ((max._getAlpha() - malpha) / div * 2) * (i + largeBound - 1) + malpha;


  //console.log(r, g, b, a)
  return color(r, g, b, a);
}
NetGraph.prototype.graphLayers = function graphLayers() {

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
          let c = NetGraph.colorScale(
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
          let c = NetGraph.colorScale(
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
          let c = NetGraph.colorScale(
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
// Setters
NetGraph.prototype.setModel = function setModel(model) {
  this.model = model;
};
NetGraph.prototype.setMode = function setMode(mode) {
  this.theme.mode = mode;
};
NetGraph.prototype.setSpread = function setSpread(spread) {
  this.theme.spread = spread;
};
NetGraph.prototype.setTheme = function setTheme(constant = CLASSIC) {
  if (typeof constant !== 'object') {
    this.theme = themes[constant];
    this.convertToColor();
  } else {
    this.theme = constant;
  }

};
NetGraph.prototype.setPos = function setPos(x, y) {
  this.x = x;
  this.y = y;
};
NetGraph.prototype.setStrokeWeight = function setStrokeWeight(key, w) {
  this.theme.strokeWeight[key] = w;
};
NetGraph.prototype.setSpacing = function setSpacing(s) {
  this.theme.spacing.neuron = s;
};
NetGraph.prototype.setOrientation = function setOrientation(O) {
  this.theme.orientation = O;
};
NetGraph.prototype.neuronSize = function neuronSize(s) {
  this.theme.size.neuron = s;
};
NetGraph.prototype.convertToColor = function convertToColor() {
  this.setColor('background', this.theme.colors.background);
  this.setColor('neuron.min', this.theme.colors.neuron.min);
  this.setColor('neuron.max', this.theme.colors.neuron.max);
  this.setColor('weights.min', this.theme.colors.weights.min);
  this.setColor('weights.max', this.theme.colors.weights.max);
  this.setColor('stroke.contour', this.theme.colors.stroke.contour);
  this.setColor('stroke.neuron', this.theme.colors.stroke.neuron);
  return;
};
NetGraph.prototype.setColor = function setColor(key, rgba) {
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
const themes = {
  classic: {
    colors: {
      background: [255, 255, 255, 0],
      stroke: {
        contour: [0, 0, 0, 0],
        neuron: [0, 0, 0, 100]
      },
      weights: {
        min: [40, 44, 52, 200],
        max: [255, 120, 70, 200]
      },
      neuron: {
        min: [40, 44, 52, 200],
        max: [255, 120, 70, 200]
      },
      background: [255, 255, 255, 0]
    },
    size: {
      neuron: 12
    },
    strokeWeight: {
      neuron: 3,
      weight: 3
    },
    spacing: {
      neuron: 18,
      layer: 100
    },
    mode: 'fixed',
    spread: 0.2,
    dynamic: true,
    valueBounds: {
      neuron: {
        min: 0,
        max: 1
      },
      weight: {
        min: -1,
        max: 1
      }
    }
  },
  standard: {
    colors: {
      stroke: {
        contour: [0, 0, 0, 0],
        neuron: [0, 0, 0, 100]
      },
      weights: {
        min: [34, 56, 247, 200],
        max: [186, 11, 11, 200]
      },
      neuron: {
        min: [34, 56, 247, 200],
        max: [200, 255, 100]
      },
      background: [255, 255, 255, 0]
    },
    size: {
      neuron: 12
    },
    strokeWeight: {
      neuron: 4,
      weight: 3
    },
    spacing: {
      neuron: 22,
      layer: 100
    },
    mode: 'square',
    spread: 10,
    dynamic: true,
    valueBounds: {
      neuron: {
        min: 0,
        max: 1
      },
      weight: {
        min: -1,
        max: 1
      }
    }
  },
  modern: {
    colors: {
      stroke: {
        contour: [0, 0, 0, 0],
        neuron: [0, 0, 0, 100]
      },
      weights: {
        min: [56, 62, 86],
        max: [246, 158, 123]
      },
      neuron: {
        min: [56, 62, 86],
        max: [246, 158, 123]
      },
      background: [255, 255, 255, 0]
    },
    size: {
      neuron: 12
    },
    strokeWeight: {
      neuron: 4,
      weight: 3
    },
    spacing: {
      neuron: 22,
      layer: 100
    },
    mode: 'square',
    spread: 10,
    dynamic: true,
    valueBounds: {
      neuron: {
        min: 0,
        max: 1
      },
      weight: {
        min: -1,
        max: 1
      }
    }
  },
  robot: {
    colors: {
      stroke: {
        contour: [0, 0, 0, 0],
        neuron: [110, 120, 135, 50]
      },
      weights: {
        min: [129, 136, 150, 50],
        max: [152, 195, 121, 50]
      },
      neuron: {
        min: [129, 136, 150],
        max: [152, 195, 121]
      },
      background: [255, 255, 255, 0]
    },
    size: {
      neuron: 12
    },
    strokeWeight: {
      neuron: 2,
      weight: 3
    },
    spacing: {
      neuron: 36,
      layer: 100
    },
    mode: 'square',
    spread: 10,
    dynamic: true,
    valueBounds: {
      neuron: {
        min: 0,
        max: 1
      },
      weight: {
        min: -1,
        max: 1
      }
    }
  }
}

const CLASSIC = 'classic';
const ROBOT = 'robot';
const MODERN = 'modern';
const STANDARD = 'standard';