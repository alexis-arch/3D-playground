import Zdog from 'zdog';
import Zfont from 'zfont';

let isSpinning = true;

function generateShapes(){
console.log('ca passe')
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas-2',
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
});

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: '#636',
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  translate: { z: -40 },
  stroke: 12,
  color: '#E62',
  fill: true,
});

function animate() {
  illo.rotate.y += isSpinning ? -0.05 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();

Zfont.init(Zdog);


// Create a Font object
// You can use any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
    src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
  });
  
  // Create a TextGroup object for the title
  // https://github.com/jaames/zfont#zdogtextgroup
  var title = new Zdog.TextGroup({
    addTo: illo,
    font: font,
    value: "Ceci est un titre",
    fontSize: 60,
    translate: {y: 75},
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#636',
    fill: true
  });
  
  // Duplicate the title to create a shadow effect
  var titleShadow = title.copyGraph({
    translate: { z: -6, y: 75 },
    color: '#aab'
  });
  
  // Create a TextGroup object for the subtitle
  // https://github.com/jaames/zfont#zdogtextgroup
  var sub = new Zdog.TextGroup({
    addTo: illo,
    font: font,
    // Pass an array as the text value for multiline text:   
    value: [
      'Voici mon text animé',
      'avec une 3D qui tourne !'
    ],
    fontSize: 34,
    translate: {y: 150},
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#E62',
    fill: true,
  });
  
  // Duplicate the subtitle to create a shadow effect
  var subShadow = sub.copyGraph({
    translate: { z: -6, y: 150},
    color: '#aab'
  })
  
  // Settings for the wave animation
  var t = 0;
  var amplitude = 3;
  var frequency = 2.5;
  var speed = 0.002;

function wave(group) {
    group.children.forEach(shape => {
      var x = shape.translate.x;
      shape._origY = shape._origY ?? shape.translate.y;
      shape.translate.y = shape._origY + Math.sin(frequency * (x + t * speed)) * amplitude;
    });
  }
  
  let last = 0;
  
  // Animation loop
  function animateText(now) {
    let d = last - now;
    last = now;
    wave(title);
    wave(titleShadow);
    wave(sub);
    wave(subShadow);
    t += d;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }
  animateText(0);

}

export {generateShapes}