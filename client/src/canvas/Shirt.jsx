import React, { useRef } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const minRotationY = -Math.PI / 4; // -45 degrees
  const maxRotationY = Math.PI / 4; // 45 degrees

  const { rotation } = useSpring({
    rotation: [
      0,
      Math.max(minRotationY, Math.min(maxRotationY, snap.rotation.y)),
      0,
    ],
    config: { mass: 1, tension: 280, friction: 30 },
  });

  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <animated.mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        rotation={rotation}
      >
        {snap.isFullTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </animated.mesh>
    </group>
  );
};

export default Shirt;