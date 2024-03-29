// reference : https://codesandbox.io/s/mvkqs
import React, {useState, useMemo} from "react";
import { Color } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

export default function Balls() {
    const colorChoices = [
        "#66CD97", //green
        "#F7ED86", //orange yellow
        "#EE786E", //pink
        "#A1F3F5", //skyblue
        "lightpink",
        "lightblue",
        "#F78A39", //orange
      ];
      const [number] = useState(200);
      const colors = useMemo(() => {
        const array = new Float32Array(number * 3);
        const color = new Color();
        for (let i = 0; i < number; i++)
          color
            .set(colorChoices[Math.floor(Math.random() * colorChoices.length)])
            .convertSRGBToLinear()
            .toArray(array, i * 3);
        return array;
      }, [number]);
      
  return (
    <Canvas
      shadows
      gl={{ alpha: false, stencil: false, antialias: true }}
      camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
    >
      {/* <fog attach="fog" args={["#F97514", 25, 35]} /> */}
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={4}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Physics
        gravity={[0, -50, 0]}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <group position={[0, 0, -10]}>
          <Mouse />
          <Borders />
          <InstancedSpheres number={number} colorsL={colors} />
        </group>
      </Physics>
      <EffectComposer>
        <SSAO
          radius={0.4}
          intensity={10}
          luminanceInfluence={0.1}
        //   color="red"
        />
        {/* <Bloom intensity={1.25} kernelSize={3} luminanceThreshold={0.5} luminanceSmoothing={0.0} /> */}
      </EffectComposer>
    </Canvas>
  );
}


function InstancedSpheres({ count = 200, colorsL }) {
  const { viewport } = useThree();

  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereBufferGeometry args={[1.2, 32, 32]}>
        <instancedBufferAttribute
          attachObject={["attributes","color"]}
          args={[colorsL, 3]}
        />
      </sphereBufferGeometry>
      <meshLambertMaterial vertexColors />
    </instancedMesh>
  );
}

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}
