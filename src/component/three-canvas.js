import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

import ThreeStars from './three-stars';

const ThreeCanvas = ({ className }) => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      camera={{
        position: [0, 0, 1]
      }}
    >
      <color attach="background" args={['#12071f']} />
      <ThreeStars />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;