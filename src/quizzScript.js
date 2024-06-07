import Zdog from 'zdog';
import Zfont from 'zfont';

function generateShapes(){
    let isSpinning = true;

    
    Zfont.init(Zdog);

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas-quizz',
        dragRotate: true,
        // stop spinning when drag starts
        onDragStart: function() {
          isSpinning = false;
        },
      });

      let semicircle = new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        rotate: {z: -Zdog.TAU/4},
        quarters: 2,
        stroke: 20,
        color: '#C25',
      });

      let tail = new Zdog.Shape({
        addTo: semicircle,
        path: [
          { y: -25, x: 20 },   // start
          { arc: [
            { x:  -20, y: -20 }, // corner
            { x:  -20, y:  -20 }, // end point
          ]},
          { arc: [ // start next arc from last end point
            { x:  -20, y:  -60 }, // corner
            { x:  -60, y:  -60 }, // end point
          ]},
        ],
        translate: {y:60},
        closed: false,
        stroke: 20,
        color: '#C25',
      });

      let dot = new Zdog.Shape({
        addTo: illo,
        // no path set, default to single point
        stroke: 30,
        translate: {y: 100},
        color: '#C25',
      });

      var font = new Zdog.Font({
        src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
      });

      var title = new Zdog.TextGroup({
        addTo: illo,
        font: font,
        value: "Quizz",
        fontSize: 60,
        translate: {y: -100},
        textAlign: 'center',
        textBaseline: 'middle',
        color: '#636',
        fill: true
      });

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
    t += d;
    illo.updateRenderGraph();
    requestAnimationFrame(animateText);
  }
  animateText(0);

  function animate() {
    semicircle.rotate.y += isSpinning ? -0.05 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  animate();


  // new Zdog.Shape({
  //   addTo: illo,
  //   path: [
  //     { x: 0, y: -40 }, 
  //     {
  //       arc: [
  //         { x: 40, y: -40 }, 
  //         { x: 40, y: 0 }, 
  //       ],
  //     },
  //     {
  //       arc: [
  //         { x: 40, y: 40 }, 
  //         { x: 0, y: 40 }, 
  //       ],
  //     },
  //     { x: 0, y: 60 },
  //   ],
  //   closed: false,
  //   stroke: 20,
  //   color: "#e31507",
  // });

  // new Zdog.Shape({
  //     addTo: illo,
  //     translate: { y: 100 },
  //     stroke: 20,
  //     color: "#e31507",
  //     fill: true,
  //   });

      
}

export {generateShapes}