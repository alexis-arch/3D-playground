import React, {useEffect} from "react"
import { generateShapes } from "./textAnimationScript";

const TextAnimation = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-3"  width="240" height="240"></canvas>
)}

export default TextAnimation;