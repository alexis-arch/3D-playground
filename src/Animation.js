import React, { useRef, useEffect } from 'react';
import { Illustration, useRender, useInvalidate, Box } from 'react-zdog';
import { Zdog } from "zdog"
import Zfont from "zfont";

// Zfont.init(Zdog);


// RotatingCube Component
const RotatingCube = () => {
const boxRef = useRef();

// Use the useRender hook to continuously update the rotation
useRender(() => {
if (boxRef.current) {
boxRef.current.rotate.x += 0.03;
boxRef.current.rotate.y += 0.03;
}
});

    return (
      <Box
        ref={boxRef}
        width={50}
        height={50}
        depth={50}
        color="#E44"
        leftFace="#4E4"
        rightFace="#44E"
        topFace="#EE4"
        bottomFace="#4EE"
      />
    );

};

// App Component
const Animation = () => {
return (
<Illustration zoom={4}>
<RotatingCube />
</Illustration>
);
};

export default Animation;