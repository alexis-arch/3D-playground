import React, {useEffect} from "react"
import { generateShapes } from "./imageSVGScript";

const ImageSVG = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-image"  width="240" height="240"></canvas>
)}

export default ImageSVG;