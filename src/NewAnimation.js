import React, {useEffect} from "react"
import { generateShapes } from "./newAnimationScript";

const NewAnimation = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-2"  width="240" height="240"></canvas>
)}

export default NewAnimation;