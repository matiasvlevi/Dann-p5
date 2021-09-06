let wnx = window.innerWidth,
  wny = window.innerHeight;



// Create sample model

let graphs = [];

const colors = [
  [253, 140, 34, 200],
  [123, 255, 65, 200],
  [62, 152, 255, 200],
  [12, 255, 85, 200],
  [255, 12, 198, 200],
  [38, 190, 198, 200],
  [80, 255, 12, 200],
  [0, 80, 255, 200],
  [10, 250, 180, 200],
  [240, 14, 189, 200],
  [100, 255, 189, 200],
  [200, 100, 0, 200],
  [120, 255, 34, 200],
  [134, 134, 198, 200],
  [255, 0, 0, 100],

]
const modes = [
  FIXED,
  SQUARE
]

const ori = [
  HORIZONTAL,
  VERTICAL
]

function createGraph(x, y) {
  let nn = new Dann(5, 5);
  nn.addHiddenLayer(floor(random(12, 18)), 'leakyReLU');
  nn.addHiddenLayer(floor(random(8, 12)), 'leakyReLU');
  nn.makeWeights(-0.1, 0.1);
  nn.lr = 0.001;
  graph = createNetGraph(x, y, 300, 200);

  graph.setModel(nn);



  // // Rainbow theme
  let ran = floor(random(0, colors.length - 1));
  graph.setColor('weights.min', colors[ran]);
  graph.setColor('weights.max', colors[ran + 1]);
  graph.setColor('neuron.min', colors[ran]);
  graph.setColor('neuron.max', colors[ran + 1]);
  let ran2 = floor(random(0, modes.length));
  graph.setMode(modes[ran2]);
  graph.setSpread(0.5);
  return graph;
}

function setup() {
  createCanvas(wnx, wny);
  frameRate(120);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i * 300 <= wny - 300; i++) {
      graphs.push(createGraph(80 + (j * 360), (i * 300) + 150));
    }
  }
}
let dataset = makeBinary(5);
let index = 0;

function draw() {
  background(51);

  for (let i = 0; i < graphs.length; i++) {
    graphs[i].show();
    dataset = shuffle(dataset)
    for (let j = 0; j < 1; j++) {
      for (data of dataset) {
        graphs[i].model.train(data.input, data.output);
      }
    }
    graphs[i].model.feed(dataset[0].input)
  }


}