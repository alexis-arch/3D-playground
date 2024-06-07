import React, {useEffect} from "react"
import { generateShapes } from "./fishScript";

const Fish = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-fish"  width="240" height="240"></canvas>
)}

export default Fish;