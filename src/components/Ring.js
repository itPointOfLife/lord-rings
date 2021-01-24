import React from 'react';
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei/useGLTF';

export const Ring = () => {
  console.log('ring');
  const group = React.useRef();
  const { nodes, materials } = useGLTF('ring.glb');

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    group.current.rotation.x = Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={group} dispose={null}>
      <mesh material-color="#ff0000" material={materials.gold} geometry={nodes.Ring.geometry} />
    </group>
  );
};
