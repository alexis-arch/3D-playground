import React, {useEffect} from "react"
import { generateShapes } from "./forkScript";

const Fork = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-fork"  width="240" height="240"></canvas>
)}

export default Fork;