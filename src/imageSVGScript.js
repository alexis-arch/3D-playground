import Zdog from 'zdog';
import Zfont from 'zfont';
import { SVGtoZDOG } from './zdog-svg-importer';

function generateShapes(){
  const illo = new Zdog.Illustration({
    element: ".zdog-canvas-image",
  });
  SVGtoZDOG(document.querySelectorAll('../public/profile-picture.svg'), illo)
  illo.updateRenderGraph();
  
      
}

export {generateShapes}