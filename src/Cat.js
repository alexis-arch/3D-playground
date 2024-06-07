import React, {useEffect} from "react"
import { generateShapes } from "./catScript";

const Cat = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-cat"  width="240" height="240"></canvas>
)}

export default Cat;