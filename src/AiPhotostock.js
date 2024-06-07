import React, {useEffect} from "react"
import { generateShapes } from "./aiPhotostockScript";

const AiPhotostock = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-ai"  width="240" height="240"></canvas>
)}

export default AiPhotostock;