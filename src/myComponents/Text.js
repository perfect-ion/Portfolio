import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend} from "@react-three/fiber";

import { useState } from "react";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import myFont from "../fonts/Lobster_Regular.json";

export const Text = ({ string,position,wf }) => {
    const font = new FontLoader().parse(myFont);
    extend({ TextGeometry });
    const [hovered, hover] = useState(false)


    return (
      
      <mesh position={position} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} castShadow>
        
        {hovered? <textGeometry args={[string, { font, size: 1, height:0}]} />:
        <textGeometry args={[string, { font, size: 1, height:0 }]} />}

        {hovered? <meshBasicMaterial attach="material" color="#EC407A" />
        :<meshBasicMaterial attach="material" color="#00CED1" />}

 {/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}

      </mesh>
    );
  };


  
