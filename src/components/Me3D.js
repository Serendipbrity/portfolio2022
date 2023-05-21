// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// const Me3D = () => {
//   const mount = useRef(null);
//   const [sphere, setSphere] = useState(null);

//   useEffect(() => {
//     const width = mount.current.clientWidth;
//     const height = mount.current.clientHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     const geometry = new THREE.SphereGeometry(15, 32, 16);
//     const texture = new THREE.TextureLoader().load('/assets/img/Me.jpeg');

//     const material = new THREE.MeshBasicMaterial({ map: texture});
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);
//     setSphere(sphere);
    
//     camera.position.z = 50;
//     renderer.setClearColor('#000000');
//     renderer.setSize(width, height);
//     mount.current.appendChild(renderer.domElement);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       sphere.rotation.x += 0.003;
//       sphere.rotation.y += 0.003;
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       const width = mount.current.clientWidth;
//       const height = mount.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     }

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mount.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   useEffect(() => {
//     if (sphere) {
//       sphere.position.set(1, 1, 1);
//     }
//   }, [sphere]);

//   return (
//     <div 
//       ref={mount} 
//       style={{ width: '100%', height: '100%', position: 'absolute', top: '0', right: '0' }}
//     />
//   );
// };

// export default Me3D;
