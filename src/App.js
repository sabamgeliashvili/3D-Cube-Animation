import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import './App.css'; 

function SpinningCube() {
  const cubeRef = React.useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={cubeRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <meshStandardMaterial attach="material" color="lightblue" roughness={0.5} metalness={0.5} />
    </Box>
  );
}

function App() {
  return (
    <div className="container">
      <div className="info">
        <h1>Simple Spinning Cube Animation with Three.js and React</h1>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SpinningCube />
      </Canvas>
    </div>
  );
}

export default App;
