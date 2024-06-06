import React, {useEffect} from "react"
import { generateShapes } from "./marioScript";

const Mario = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="mario-canvas"  width="240" height="240"></canvas>
)}

export default Mario;