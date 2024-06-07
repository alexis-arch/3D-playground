import React, {useEffect} from "react"
import { generateShapes } from "./gymScript";

const Gym = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-gym"  width="240" height="240"></canvas>
)}

export default Gym;