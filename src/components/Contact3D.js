import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../App.css';

function Contact3D() {
  const ref = useRef();
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

   useEffect(() => {
    if (!ref.current) {
      return;
    }

    const updateSize = () => {
      setParentSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    if (parentSize.width === 0 && parentSize.height === 0) {
        return;
      }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, parentSize.width / parentSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.gammaOutput = true;


    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(parentSize.width, parentSize.height);
    camera.position.set(0, 0, 50);
camera.near = 0.1;
camera.far = 5000;
camera.updateProjectionMatrix();

    // Append the renderer to the DOM
    ref.current.appendChild(renderer.domElement);

  // create a shape
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16); // radius, tube, radial segments, tubular segments

// create a material
const material = new THREE.MeshStandardMaterial({color: 0xffffff  }); // color of the material

const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// add light
const pointLight = new THREE.PointLight(0xb85de0, 1, 100);

// like a fload light which lights everything equally from all directions
const ambientLight = new THREE.AmbientLight( 0x5167ea ); // soft white light

pointLight.position.set( 10, 10, 10 );
scene.add( pointLight, ambientLight );

// shows position and direction of light source
// const pointLightHelper = new THREE.PointLightHelper( pointLight );
// scene.add( pointLightHelper );

const size = 200;
const divisions = 50;
// shows grid helper
// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

// grab and move with mouse
const controls = new OrbitControls(camera, renderer.domElement);

// add stars randomly
function addStar() { 
    const geometry = new THREE.SphereGeometry(0.25, 24, 24); // radius, width segments, height segments
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    // random position
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100)); // random number between -100 and 100

    // set star position
    star.position.set(x, y, z);
    // add star to scene
    scene.add(star);
}
Array(200).fill().forEach(addStar); // add 200 stars
 
// add background image
const spaceTexture = new THREE.TextureLoader().load('/images/lookUp.jpg');
scene.background = spaceTexture;


    const animate = function () {
      requestAnimationFrame(animate);
      // Other animation code...
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up
      while(ref.current.firstChild){
        ref.current.removeChild(ref.current.firstChild);
      }
    };
  }, [parentSize]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
}

export default Contact3D;
