import Zdog from 'zdog';
import Zfont from 'zfont';

function generateShapes(){
    let isSpinning = true;
    Zfont.init(Zdog);

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas-cat',
        dragRotate: true,
        // stop spinning when drag starts
        onDragStart: function() {
          isSpinning = false;
        },
      });

      let head = new Zdog.Shape({
        addTo: illo,
        // no path set, default to single point
        stroke: 70,
        color: '#ff8968',
      });

      let eye = new Zdog.Ellipse({
        addTo: head,
        diameter: 16,
        quarters: 2, // semi-circle
        translate: { x: -14, y: 1, z: 21 },
        // rotate semi-circle to point up
        rotate: { z: -Zdog.TAU/4 },
        color: "white",
        stroke: 0.5,
        // hide when front-side is facing back
        backface: false,
      });
      // eye on right
      eye.copy({
        translate: { x: 14, y: 1, z: 21 },
      });

      new Zdog.Ellipse({
        addTo: head,
        diameter: 3,
        quarters: 2,
        translate: { y: 3, z: 21 },
        rotate: { z: Zdog.TAU/4 },
        closed: true,
        color: 'white',
        stroke: 0.5,
        fill: true,
        backface: false,
      });


      let moustache = new Zdog.Shape({
        addTo: head,
        path: [ { y: -5 }, { y: -48, x: -5 } ],
        translate: { y: 7, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });


      let moustacheLeft = new Zdog.Shape({
        addTo: head,
        path: [ { y: 5 }, { y: 48, x: -5 } ],
        translate: { y: 7, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });

      let moustache2 = new Zdog.Shape({
        addTo: head,
        path: [ { y: -5 }, { y: -48 } ],
        translate: { y: 9.5, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });

      let moustache2Left = new Zdog.Shape({
        addTo: head,
        path: [ { y: 5 }, { y: 48 } ],
        translate: { y: 9.5, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });

      let moustache3 = new Zdog.Shape({
        addTo: head,
        path: [ { y: -5 }, { y: -48 , x: 5  } ],
        translate: { y: 12, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });

      let moustache3Left = new Zdog.Shape({
        addTo: head,
        path: [ { y: 5 }, { y: 48 , x: 5  } ],
        translate: { y: 12, z: 21 },
        color: 'black',
        rotate: { z: Zdog.TAU/4 },
        stroke: 0.5,
      });

      let ear = new Zdog.Cone({
        addTo: head,
        diameter: 30,
        translate: {x: 20 },
        length: 50,
        rotate: { x: Zdog.TAU/4 },
        stroke: false,
        color: '#ff8968',
        backface: '#ff8968',
      });

      let ear2 = new Zdog.Cone({
        addTo: head,
        diameter: 30,
        translate: {x: -20 },
        length: 50,
        rotate: { x: Zdog.TAU/4 },
        stroke: false,
        color: '#ff8968',
        backface: '#ff8968',
      });

      //Cat Body
    let body = new Zdog.Cone({
        addTo: illo,
        diameter: 90,
        translate: {y: 120 },
        length: 120,
        rotate: { x: Zdog.TAU/4 },
        stroke: false,
        color: '#ff8968',
        backface: '#C25',
      });

      // let tail = new Zdog.Shape({
      //   addTo: body,
      //   path: [ { y: 10 }, { y: -48 } ],
      //   translate: { x: 0, y: -50, z: 20 },
      //   color: '#ff8968',
      //   rotate: { x: -Zdog.TAU/5 },
      //   stroke: 12,
      // });

      let tail = new Zdog.Shape({
        addTo: body,
        path: [
          { y: -10 },   // start
          { arc: [
            { x:  20, y: 10 }, // corner
            { x:  20, y:  20 }, // end point
          ]},
          { arc: [ // start next arc from last end point
            { x:  20, y:  60 }, // corner
            { x:  60, y:  60 }, // end point
          ]},
        ],
        closed: false,
        translate: { x: 0, y: -40, z: 20 },
        rotate: { x: Zdog.TAU/5, y: Zdog.TAU/5 },
        stroke: 12,
        color: '#ff8968',
      });

      let foot = new Zdog.Shape({
        addTo: illo,
        // no path set, default to single point
        stroke: 30,
        translate: {z: 45, y: 110, x: 30},
        color: '#ff8968',
      });
      foot.copy({
        translate: {z: 45, y: 110, x: -30},
      });

    //   new Zdog.Cone({
    //     addTo: illo,
    //     diameter: 90,
    //     translate: {z: 90 },
    //     length: 60,
    //     rotate: { x: Zdog.TAU/4 },
    //     stroke: false,
    //     color: '#ff8968',
    //     backface: '#C25',
    //   });

    function animate() {
      illo.rotate.y += isSpinning ? -0.05 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame( animate );
    }
    animate();

    //   var font = new Zdog.Font({
    //     src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
    //   });
      

    //   var title = Zdog.TextGroup({
    //     addTo: illo,
    //     font: font,
    //     value: "Fish",
    //     fontSize: 60,
    //     translate: {y: 75},
    //     textAlign: 'center',
    //     textBaseline: 'middle',
    //     color: '#ff8968',
    //     fill: true
    //   });
      
    //   // Duplicate the title to create a shadow effect
    //   title.copyGraph({
    //     translate: { z: -6, y: 75 },
    //     color: '#aab'
    //   });
}

export {generateShapes}