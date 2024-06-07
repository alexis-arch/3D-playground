import Zdog from 'zdog';
import Zfont from 'zfont';

function generateShapes(){
    let isSpinning = true;

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas-fork',
        dragRotate: true,
        // stop spinning when drag starts
        onDragStart: function() {
          isSpinning = false;
        },
      });

      let manche = new Zdog.Shape({
        addTo: illo,
        path: [
          { y: -40 }, // start at 1st point
          { y:  40 }, // line to 2nd point
        ],
        stroke: 15,
        color: '#636',
      });


      let pointe = new Zdog.Shape({
        addTo: manche,
        translate: { y: -45 },
        path: [
          { x: -15 }, // start at 1st point
          { x:  15 }, // line to 2nd point
        ],
        stroke: 10,
        color: '#636',
      });

      let pointe1 = new Zdog.Shape({
        addTo: pointe,
        path: [
          { y: -30 }, // start at 1st point
          { y:  0 }, // line to 2nd point
        ],
        translate: { x: -15 },
        stroke: 5,
        color: '#636',
      });

      let pointe2 = new Zdog.Shape({
        addTo: pointe,
        path: [
          { y: -30 }, // start at 1st point
          { y:  0 }, // line to 2nd point
        ],
        translate: { x: -5 },
        stroke: 5,
        color: '#636',
      });

      let pointe3 = new Zdog.Shape({
        addTo: pointe,
        path: [
          { y: -30 }, // start at 1st point
          { y:  0 }, // line to 2nd point
        ],
        translate: { x: 5 },
        stroke: 5,
        color: '#636',
      });

      let pointe4 = new Zdog.Shape({
        addTo: pointe,
        path: [
          { y: -30 }, // start at 1st point
          { y:  0 }, // line to 2nd point
        ],
        translate: { x: 15 },
        stroke: 5,
        color: '#636',
      });

      let plate = new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        translate: {x:80},
        stroke: 20,
        color: '#C25',
      });

      let accent1 = new Zdog.Shape({
        addTo: illo,
        translate: { y: -60, x: 60 },
        path: [
          { x: -15 }, // start at 1st point
          { x:  15, y: -10 }, // line to 2nd point
        ],
        stroke: 10,
        color: '#C25',
      });


      let accent2 = new Zdog.Shape({
        addTo: illo,
        translate: { y: -70, x: 90 },
        path: [
          { x: -15 }, // start at 1st point
          { x:  15, y: 10 }, // line to 2nd point
        ],
        stroke: 10,
        color: '#C25',
      });

      let knifemanche = new Zdog.Shape({
        addTo: illo,
        path: [
          { y: -50 }, // start at 1st point
          { y:  50 }, // line to 2nd point
        ],
        translate: {x:160},
        stroke: 15,
        color: '#636',
      });


      let knife = new Zdog.Shape({
        addTo: knifemanche,
        path: [ // triangle
          { x:   0, y: -50 },
          { x:  20, y:  15 },
          { x: 0, y:  15 },
        ],
        fill: true,
        // closed by default
        stroke: 20,
        color: '#a8acae'
      });
      

      function animate() {
        illo.rotate.y += isSpinning ? -0.05 : 0;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
      }
      animate();

      
}

export {generateShapes}