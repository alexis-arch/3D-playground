import Zdog from 'zdog';
import Zfont from 'zfont';

function generateShapes(){
    let isSpinning = true;

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas-fish',
        dragRotate: true,
        // stop spinning when drag starts
        onDragStart: function() {
          isSpinning = false;
        },
      });

      let body = new Zdog.Cone({
        addTo: illo,
        diameter: 80,
        length: 160,
        stroke: false,
        color: '#23a95f',
        backface: '#23a95f',
      });


      let head = new Zdog.Hemisphere({
        addTo: illo,
        diameter: 80,
        rotate: { x: Zdog.TAU/2 },
        // fill enabled by default
        // disable stroke for crisp edge
        stroke: false,
        color: '#23a95f',
        backface: '#23a95f',
      });

      let eye = new Zdog.Shape({
        addTo: head,
        // no path set, default to single point
        stroke: 12,
        translate: {z: 40, y: 10, x:12},
        color: 'black',
      });

      let eye2 = new Zdog.Shape({
        addTo: head,
        // no path set, default to single point
        stroke: 12,
        translate: {z: 40, y: 10, x:-12},
        color: 'black',
      });

      let fin = new Zdog.Shape({
        addTo: body,
        path: [ // triangle
          { x:   0, y: -18 },
          { x:  18, y:  18 },
          { x: -18, y:  18 },
        ],
        translate: { x: 37, y:10, z:10 },
        rotate: { x: Zdog.TAU/4, y: -0.5 },
        fill: true,
        // closed by default
        stroke: 10,
        color: 'red'
      });

      let fin2 = new Zdog.Shape({
        addTo: body,
        path: [ // triangle
          { x:   0, y: -18 },
          { x:  18, y:  18 },
          { x: -18, y:  18 },
        ],
        translate: { x: -37, y:10, z:10 },
        rotate: { x: Zdog.TAU/4, y: 0.5 },
        fill: true,
        // closed by default
        stroke: 10,
        color: 'red'
      });

      let tail = new Zdog.Shape({
        addTo: body,
        path: [ // triangle
          { x:   0, y: -20 },
          { x:  20, y:  20 },
          { x: -20, y:  20 },
        ],
        translate: { z: 160 },
        rotate: { x: Zdog.TAU/4, y: Zdog.TAU/4 },
        fill: true,
        // closed by default
        stroke: 20,
        color: '#23a95f'
      });

      function animate() {
        illo.rotate.y += isSpinning ? -0.05 : 0;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
      }
      animate();

      
}

export {generateShapes}