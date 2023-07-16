import { useRef, useState, createContext, useContext, useEffect } from "react";



export const Pln = ({ position, args, color }) => {
  const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <>
      <mesh position={position} ref={mesh} receiveShadow rotation-x={-Math.PI / 2}>
        <planeBufferGeometry attach="geometry" args={args} />
        <meshPhongMaterial
          // attach="material"
          // color="black"
          // metalness={0.75}
          // roughness={0}
          // speed={1}
          // factor={0.1}
        />
      </mesh>
    </>
  );
};
