// async function addP5() {
//   let p5CDN = document.createElement('script');
//   p5CDN.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js');
//   await document.head.prepend(p5CDN);
// }
// async function addDannjs() {
//   let DannjsCDN = document.createElement('script');
//   DannjsCDN.setAttribute('src', 'https://cdn.jsdelivr.net/gh/matiasvlevi/dann@latest/build/dann.js');

//   await document.head.prepend(DannjsCDN);
// }

// if (typeof p5 !== 'undefined' && typeof Dann !== 'undefined') {
//   console.log('Starting')
//   addAll()
// } else {
//   addP5().then(() => {
//     if (typeof Dann !== 'undefined') {
//       console.log('Starting')
//       addAll()
//     } else {
//       addDannjs().then(
//         addAll
//       );
//     }
//   });
// }

function addAll() {
  p5.NetGraph = NetGraph;
}