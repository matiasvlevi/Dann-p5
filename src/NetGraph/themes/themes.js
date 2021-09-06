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
    spread: 0.1,
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