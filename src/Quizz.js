import React, {useEffect} from "react"
import { generateShapes } from "./quizzScript";

const Quizz = () => {
     useEffect(() => {
      generateShapes()
     })
     
    
    return (
    <canvas className="zdog-canvas-quizz"  width="240" height="240"></canvas>
)}

export default Quizz;