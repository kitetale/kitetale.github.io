// reference: https://codesandbox.io/s/5jvdu3?file=/src/App.js:0-2627
import React, { useEffect, useRef, useState, useMemo, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { CatmullRomCurve3, CurvePath, TubeGeometry, BufferGeometry, LineBasicMaterial, LineLoop, Vector3 } from 'three'

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <QuestionMark />
      <OrbitControls />
      <AsciiRenderer fgColor="black" bgColor="white" />
    </Canvas>
  )
}

function QuestionMark(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))

  //create curve
  const handlePos = React.useMemo(
    () =>
      [
        { x: 10, y: 0, z: -10 },
        { x: 10, y: 0, z: 10 },
        { x: -10, y: 0, z: 10 },
        { x: -10, y: 0, z: -10 },
      ].map((hand) => new Vector3(...Object.values(hand))),
    []
)   
const curve = React.useMemo(() => new CatmullRomCurve3(handlePos, true, 'centripetal'), [handlePos])
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.75}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      {/* <TubeGeometry args={[curve, 20, 2, 8, false]} /> */}
      <torusKnotGeometry args={[2,0.5,132,4,3,2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = ' .?ntFound', //   ' .:-+*=%@#'
  invert = true,
  color = false,
  resolution = 0.15
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, invert, color, resolution])

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode.removeChild(effect.domElement)
    }
  }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it is a purely logical
  return null
}
