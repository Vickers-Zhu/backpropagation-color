import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Viewport.css";

const Viewport = () => {
  const viewportRef = useRef(null);
  const scene = new THREE.Scene();

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const camera = new THREE.PerspectiveCamera(
      75,
      viewportRef.current.offsetWidth / viewportRef.current.offsetHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      viewportRef.current.offsetWidth,
      viewportRef.current.offsetHeight
    );
    viewportRef.current.appendChild(renderer.domElement);

    // Create the nodes
    const inputNodes = createNodes(9, "#ff0000", -5, 1);
    const hiddenNodes = createNodes(6, "#00ff00", 0, 0);
    const outputNodes = createNodes(3, "#0000ff", 5, -1);

    // // Create directional lights
    // const inputToHiddenLight = createLight(inputNodes, hiddenNodes, "#00ff00");
    // const hiddenToOutputLight = createLight(
    //   hiddenNodes,
    //   outputNodes,
    //   "#ffff00"
    // );

    // Add nodes and lights to the scene
    scene.add(
      ...inputNodes,
      ...hiddenNodes,
      ...outputNodes
      // inputToHiddenLight,
      // hiddenToOutputLight
    );

    // // Position the camera
    camera.position.z = 15;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the nodes
      inputNodes.forEach((node) => (node.rotation.y += 0.01));
      hiddenNodes.forEach((node) => (node.rotation.y += 0.01));
      outputNodes.forEach((node) => (node.rotation.y += 0.01));

      // Render the scene
      renderer.render(scene, camera);
    };

    // // Start the animation loop
    animate();

    // Clean up
    return () => {
      // Clean up Three.js resources
      // renderer.dispose();
      // scene.remove(cube);
    };
  }, []);

  const createNodes = (count, color, initialX, initialZ) => {
    const nodes = [];

    for (let i = 0; i < count; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color });
      const node = new THREE.Mesh(geometry, material);
      node.position.x = initialX + i * 2;
      node.position.z = initialZ;
      nodes.push(node);
    }

    return nodes;
  };

  const createLight = (sourceNodes, targetNodes, color) => {
    const light = new THREE.DirectionalLight(color, 1);
    const target = new THREE.Vector3();

    light.target = target;
    sourceNodes.forEach((sourceNode) => {
      targetNodes.forEach((targetNode) => {
        const direction = new THREE.Vector3().subVectors(
          targetNode.position,
          sourceNode.position
        );
        target.copy(sourceNode.position).add(direction.multiplyScalar(0.5));
        light.position.copy(sourceNode.position);
        light.position.y += 1;
        light.position.add(direction.multiplyScalar(0.5));
        scene.add(light);
      });
    });

    return light;
  };

  return <div className="viewport" ref={viewportRef}></div>;
};

export default Viewport;
