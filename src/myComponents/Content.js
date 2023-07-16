import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend,useFrame } from "@react-three/fiber";

import { useRef, useState, createContext, useContext, useEffect, forwardRef } from "react";
import { MeshWobbleMaterial, OrbitControls, CameraShake, Image, ScrollControls, Sparkles,MeshDistortMaterial} from "@react-three/drei";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import myFont from "../fonts/Lobster_Regular.json";


export const Content = ({ string,position }) => {
    const font = new FontLoader().parse(myFont);
    extend({ TextGeometry });
    const [hovered, hover] = useState(false)


    return (
      
      <mesh position={position} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        
        {hovered? <textGeometry args={[string, { font, size: 0.82, height:0}]} />:
        <textGeometry args={[string, { font, size: 0.8, height:0 }]} />}

        {hovered? <meshBasicMaterial attach="material" color="#EC407A"/>
        :<meshBasicMaterial attach="material" color="#00CED1"/>}
    
      </mesh>
    );
  };


  
