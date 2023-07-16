import "../App.scss";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { ScrollControls, Scroll, Image, Html } from "@react-three/drei";

import { Curs } from "./Curs";
import { Content } from "./Content";
import {Frm} from "./Frm"
import React, { useState, useEffect } from 'react';


function useWindowSize() {
  const [size,setSize]  = useState([window.innerHeight,window.innerWidth])
  useEffect(()=>{
    const handleResize = ()=>{
      setSize([window.innerHeight,window.innerWidth])
    }
    window.addEventListener("resize",handleResize)
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
  },[])
  return size
}


export const ContactMe = () => {
  const [height,width] = useWindowSize()
  return (
    <>
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
    <color attach="background" args={["#595959"]} />
    <Suspense fallback={null}>
      <ambientLight intensity={0.015} />

      <ScrollControls damping={5} pages={1}>
        <Scroll>
        <Content string="Contact me" position={[-width/190,height/225,0]}/>
        <Image scale={[width/148, height/65, 0]} url={"/images/map.png"} position={[width/239,0, 0]}/>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
            <div style={{ position: "absolute", left:"15.5vw", top: "35vh" }}>
            <Frm />
            </div>
            <div>            
                <h1
                style={{
                    position: "absolute",
                    top: `30vh`,
                    color: "#999999",
                    left: "12vw",
                    fontSize: "1.6em",
                }}
                >
      cin &#8811;
    </h1></div>
        </Scroll>
    </ScrollControls>

      
      <Curs />

    </Suspense>
  </Canvas>
    </>
  )
}
