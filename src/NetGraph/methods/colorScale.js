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