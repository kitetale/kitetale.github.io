import React, { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
// import { useDrag } from 'react-use-gesture';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

const ThreeStars = () => {
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent={true} color="#f6b4ff" size={0.013} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export default ThreeStars;