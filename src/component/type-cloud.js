// reference : https://github.com/uuuulala/WebGL-typing-tutorial/blob/master/js/01_clouds.js
import React, { useRef, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree, createPortal } from "@react-three/fiber";

const Type = () => {
  const font = "Lato";
  const fontSize = 60;
  const scaleFactor = 0.08;

  // DOM selectors
  const containerEl = document.querySelector(".container");
  const textInputEl = document.querySelector("#text-input");

  textInputEl.style.fontSize = fontSize + "px";
  textInputEl.style.font = "100 " + fontSize + "px " + font;
  textInputEl.style.lineHeight = 1.1 * fontSize + "px";

  // 3D scene related globals
  let renderer,
    textCanvas,
    textCtx,
    particleGeometry,
    particleMaterial,
    instancedMesh,
    dummy,
    clock,
    cursorMesh;

  let msg = "Hello!\nI'm Ashley :)\nWelcome to my website.";

  // Coordinates data per 2D canvas and 3D scene
  let textureCoordinates = [];

  // 1d-array of data objects to store and change params of each instance
  let particles = [];

  // Parameters of whole string per 2D canvas and 3D scene
  let stringBox = {
    wTexture: 0,
    wScene: 0,
    hTexture: 0,
    hScene: 0,
    caretPosScene: [],
  };

  textInputEl.innerHTML = msg;
  textInputEl.focus();

  //init -----------------------------------------------------------------------
  const {
    gl,
    scene: defaultScene,
    camera: defaultCamera,
    size,
    events,
  } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const [camera] = useState(
    () => new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000)
  );
  camera.position.z = 20;
  //----------------------------------------------------------------------- init

  function createEvents() {}

  return (
    <Canvas
        gl={{ antialias: false, alpha: true }}
        camera={camera}
    >
        <div>type-cloud</div>
    </Canvas>
    );
};

export default Type;
