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

    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const pointLight = new THREE.PointLight(0xb85de0, 1, 100);
    const ambientLight = new THREE.AmbientLight( 0x5167ea );
    pointLight.position.set( 10, 10, 10 );
    scene.add( pointLight, ambientLight );

    new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(200).fill().forEach(addStar);

    const spaceTexture = new THREE.TextureLoader().load('');
    scene.background = spaceTexture;

    const animate = function () {
      requestAnimationFrame(animate);

      // Add rotation to the torus knot
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      while(ref.current.firstChild){
        ref.current.removeChild(ref.current.firstChild);
      }
    };
  }, [parentSize]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
}

export default Contact3D;
