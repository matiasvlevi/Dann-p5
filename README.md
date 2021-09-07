
<p align="center">
  <img src="assets/logo.svg" width="40%">
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/github/v/release/matiasvlevi/dann-p5?style=flat&color=f69e7b&labelColor=383e56&label=version" alt="versionNpmStat"/></a> <a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/repo-size/matiasvlevi/dann-p5?style=flat&label=size&color=f69e7b&labelColor=383e56" alt="repoSize"/></a>  <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/jsdelivr/gh/hy/matiasvlevi/dann-p5?label=cdn&style=flat&color=f69e7b&labelColor=383e56" alt="downloadNpmStat"/></a> <a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/matiasvlevi/dann?color=f69e7b&labelColor=383e56" alt="Liscence"></a>
</p>
<h4 align="center">p5js graphics for Dannjs</h4>
<p align="center">
    Display any Dann model & customize themes!
 
  </p>
  <br/>
  <p align="center">
  <img src="assets/training.gif" height="200">  <img src="assets/training2.gif" height="200">
  </p>

<br/>

    This library is still in the early stages of development, contributors are more than welcome!

<br/><br/>

### CDN
```html
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann-p5@latest/build/dannp5.min.js"></script>
```

p5js & Dannjs are included in this CDN

<br/>

# Getting started

#### Setup a graph for a model.

```js
// Create Dann model
let nn = new Dann(4, 4);
nn.addHiddenLayer(12);
nn.makeWeights();

let graph;
function setup() {
  createCanvas(600, 600);
  // Create graph
  graph = createNetGraph(10, 10, 200, 125);
  graph.setModel(nn);
}

function draw() {
  background(51);
  // Display graph
  graph.show();
}

```

<br/>

#### Customize the graph's theme

```js
// Create Dann model
let nn = new Dann(4, 4);
nn.addHiddenLayer(12);
nn.makeWeights();

let graph;
function setup() {
  createCanvas(600, 600);
  // Create graph
  graph = createNetGraph(10, 10, 200, 125);
  graph.setMode(FIXED);
  graph.setStrokeWeight('weight', 4);
  graph.setColor('neuron.max', [255,0,0,255]);
  graph.setColor('neuron.min', [0,0,255,255]);
  graph.setSpacing(16);
  graph.setTheme(ROBOT);
  graph.setModel(nn);
}

function draw() {
  background(51);
  // Display graph
  graph.show();
}

```

<br/>

# All available options

```js
// Set a Dann model
graph.setModel(model);

// Set theme preset
graph.setTheme(theme); // CLASSIC, MODERN, ROBOT, STANDARD

// Set an individual color
graph.setColor(key, [r, g, b, a]);
/*Available keys:
* background
* neuron.min
* neuron.max
* weights.min
* weights.max
* stroke.contour
* stroke.neuron
*/

// Set display mode
graph.setMode(mode);   // SQUARE, FIXED, FIXED_UP

// Set graph position
graph.setPos(x, y);

// Set stroke weight
graph.setStrokeWeight(key, value);
/* Available keys:
* weight
* neuron
*/

// Set value spread (the bigger, the less change in color)
graph.setSpread(value)

// Set neuron spacing (only with FIXED modes)
graph.setSpacing(value);

// Set neuron size
graph.setNeuronSize(value);

// Set orientation of the graph
graph.setOrientation(orientation); // VERTICAL, HORIZONTAL
```


<br/><br/>

# Socials

<div>
<a href="https://twitter.com/DannjsAi" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/twitter.svg alt=twitter width=40px />
</a>
<a href="https://patreon.com/dannjs" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/patreon.svg alt=twitter width=40px />
</a>
<a href="https://instagram.com/dannj.s" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/instagram.svg alt=twitter width=40px />
</a>
</div>

<br/><br/>


## Contributors 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/matias-vazquez-levi-846a991a6/"><img src="https://avatars.githubusercontent.com/u/50473168?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matias Vazquez-Levi</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann-p5/commits?author=matiasvlevi" title="Code">💻</a> <a href="https://github.com/matiasvlevi/Dann-p5/commits?author=matiasvlevi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ramos-papadopoulos"><img src="https://avatars.githubusercontent.com/u/82990932?v=4?s=100" width="100px;" alt=""/><br /><sub><b>EL Ramos</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann-p5/commits?author=ramos-papadopoulos" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<br/>

## Licence
MIT


