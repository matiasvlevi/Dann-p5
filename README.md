
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
  <img src="https://i.ibb.co/6ssYKHG/unknown.png" height="240">  <img src="https://i.ibb.co/NZGV48W/unknown-1.png" height="240">
  </p>

<br/>

### CDN
```html
<script src="https://raw.githubusercontent.com/matiasvlevi/Dann-p5/v0.0.1/build/dannp5.min.js"></script>
```

<br/>

# Getting started

Setup a graph for a model.

```js
// Create Dann model
let nn = new Dann(4, 4);
nn.addHiddenLayer(12);
nn.makeWeights();

let graph;
function setup() {
  createCanvas(600, 600);
 
  // Graph at: x:10 y:10 w:200 h:125
  graph = new NetGraph(10, 10, 200, 125);
  graph.setModel(nn);
}
function draw() {
  background(51);

  // Show on screen
  graph.show();
}

```

<br/>

Here is how you can customize the graphs's theme:

```js
// Create Dann model
let nn = new Dann(2, 1);
nn.addHiddenLayer(12);
nn.makeWeights();

let graph;
function setup() {
  createCanvas(600, 600);
 
  // Graph at: x:10 y:10 w:200 h:125
  graph = new NetGraph(10, 10, 200, 125);
  graph.setMode(FIXED);
  graph.setSpacing(16);
  graph.setTheme(ROBOT);
  graph.setModel(nn);
}

function draw() {
  background(51);

  // Show on screen
  graph.show();
}
```

<br/>


# Socials

[![IMAGE](https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/twitter.svg)](https://twitter.com/dannjsai)
[![image](https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/patreon.svg)](https://www.patreon.com/join/dannjs)
[![image](https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/instagram.svg)](https://www.instagram.com/dannj.s/)

<br/>


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


## Licence
MIT


