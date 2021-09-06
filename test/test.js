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
  SQUARE,
  FIXED_UP
]

const ori = [
  HORIZONTAL,
  VERTICAL
]

function createGraph(x, y) {
  let nn = new Dann(5, 5);
  nn.addHiddenLayer(floor(random(6, 18)), 'leakyReLU');
  nn.makeWeights(-0.1, 0.1);
  nn.lr = 0.001;
  graph = new NetGraph(x, y, 420, 250);

  graph.setModel(nn);



  // // Rainbow theme
  // let ran = floor(random(0, colors.length - 1));
  // graph.setColor('weights.min', colors[ran]);
  // graph.setColor('weights.max', colors[ran + 1]);
  // graph.setColor('neuron.min', colors[ran]);
  // graph.setColor('neuron.max', colors[ran + 1]);
  return graph;
}

function setup() {
  createCanvas(wnx, wny);
  frameRate(120);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i * 400 <= wny - 400; i++) {
      graphs.push(createGraph(80 + (j * 500), (i * 350) + 80));
    }
  }
}
let dataset = makeBinary(5);
let index = 0;

function shuffle(arr) {
  let currentId = arr.length;

  while (0 !== currentId) {

    let randId = Math.floor(Math.random() * currentId);
    currentId -= 1;

    let temp = arr[currentId];
    arr[currentId] = arr[randId];
    arr[randId] = temp;
  }
  return arr;
}

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