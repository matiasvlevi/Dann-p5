NetGraph.error = function error(msg, func) {
  console.error(msg + '\n ' + 'Stopped p5js "draw" loop \n > ' + func);
  console.warn();
  noLoop();
  return;
}