import Zdog from 'zdog';
import Zfont from 'zfont';

function generateShapes(){
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: '.zdog-canvas-ai',
      dragRotate: true,
    });
  
    // Create the robot head (a simple box)
    let head = new Zdog.Box({
      addTo: illo,
      width: 80,
      height: 80,
      depth: 80,
      stroke: false,
      color: '#E1E1E1', // Light gray color for the head
      leftFace: '#D1D1D1',
      rightFace: '#C1C1C1',
      topFace: '#F1F1F1',
      bottomFace: '#B1B1B1',
    });
  
    // Create the robot eyes (cylinders)
    new Zdog.Cylinder({
      addTo: head,
      diameter: 20,
      length: 10,
      translate: { x: -20, y: -10, z: 45 },
      color: '#000000', // Black color for the eyes
    });
  
    new Zdog.Cylinder({
      addTo: head,
      diameter: 20,
      length: 10,
      translate: { x: 20, y: -10, z: 45 },
      color: '#000000', // Black color for the eyes
    });
  
    // Create the robot mouth (a simple rectangle)
    new Zdog.Rect({
      addTo: head,
      width: 40,
      height: 10,
      translate: { y: 20, z: 45 },
      color: '#FF0000', // Red color for the mouth
      stroke: 5,
      fill: true,
    });
  
    // Create the robot antenna (a simple cone)
    new Zdog.Cone({
      addTo: head,
      diameter: 20,
      length: 40,
      translate: { y: -40 },
      rotate: { x: Zdog.TAU / 4 },
      stroke: false,
      color: 'black', // Orange color for the antenna
      backface: '#FFC300',
    });

      // Create the camera body
  let body = new Zdog.Box({
    addTo: illo,
    translate: { y: 90 },
    width: 100,
    height: 60,
    depth: 40,
    stroke: false,
    color: '#333333', // Dark gray for the body
    leftFace: '#2c2c2c',
    rightFace: '#3c3c3c',
    topFace: '#4c4c4c',
    bottomFace: '#1c1c1c',
  });

  // Create the camera lens
  let lens = new Zdog.Cylinder({
    addTo: body,
    diameter: 40,
    length: 20,
    translate: { z: 30 },
    color: '#D1D1D1', // Gray for the lens
    backface: '#D1D1D1',
    stroke: false,
  });

  // Create the camera button
  let button = new Zdog.Cylinder({
    addTo: body,
    diameter: 10,
    length: 5,
    translate: { x: -35, y: -25, z: 20 },
    color: '#FF0000', // Red for the button
    backface: '#DD0000',
    stroke: false,
  });

  // Create the camera viewfinder
  let viewfinder = new Zdog.Box({
    addTo: body,
    width: 20,
    height: 15,
    depth: 10,
    translate: { x: -35, y:-10, z: -25 },
    stroke: false,
    color: '#222222', // Darker gray for the viewfinder
    leftFace: '#1c1c1c',
    rightFace: '#2c2c2c',
    topFace: '#3c3c3c',
    bottomFace: '#1c1c1c',
  });
  
    // Animate the illustration
    function animate() {
      illo.rotate.y += 0.01;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
      
}

export {generateShapes}