import "../App.scss";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { ScrollControls, Scroll, Image } from "@react-three/drei";
import React, { useState, useEffect } from 'react';

import { Text } from "./Text";
import { Curs } from "./Curs";
import { Content } from "./Content";
import { Pln } from "./Pln";
import { Lights } from "./Lights";
import { HtmlContent } from "./HtmlContent";


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


export const MyHome = () => {
  const [height,width] = useWindowSize()
  return (
    <>
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
    <color attach="background" args={["#595959"]} />
    {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
    <Suspense fallback={null}>
      {/* <Foo/> */}

      <ambientLight intensity={0.015} />

      <ScrollControls damping={5} pages={3}>
        <Scroll>
          <Lights />
          <Text string="Hi," position={[ -width / 200, height / 375, 0]}/>
          <Text string="I'm" position={[-width / 200,window.innerHeight / 375 - 1.5,0]}/>
          <Text string="Gaurav," position={[-(width / 200) + 2.2,height / 375 - 1.5,0]}/>
          <Text string="web" position={[-width / 200,height / 375 - 3,0]}/>
          <Text string="developer" position={[-(width / 200) + 2.3,height / 375 - 3,0]}/>
          <Pln position={[0, -4, 0]} args={[25, 25]} color="#1e1022" />
          <Content string="Me," position={[-width / 190, -height/90, 0]}/>
          <Content string="Myself" position={[-width / 190+ 1.75, -height/90, 0]}/>
          <Content string="and" position={[-width / 190+5, -height/90, 0]}/>
          <Content string="I" position={[-width / 190+7, -height/90, 0]}/>
          <Content string="Contact me" position={[-width / 200, -19.5, 0]}/>
          <Image scale={[width/148, height/65, 1]} url={"/images/map.png"} position={[width / 200 - 1.25, -23.1, 0]}/>
          <Content string="Skills" position={[width / 300, -height/90, 0]}/>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <HtmlContent />
        </Scroll>
      </ScrollControls>

      <Curs />

    </Suspense>
  </Canvas>
    </>
  )
}
