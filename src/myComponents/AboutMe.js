import "../App.scss";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { ScrollControls, Scroll, Image, Html } from "@react-three/drei";

import { Curs } from "./Curs";
import { Content } from "./Content";
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


export const AboutMe = () => {
  const [height,width] = useWindowSize()
  return (
    <>
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
    <color attach="background" args={["#595959"]} />
    <Suspense fallback={null}>
      <ambientLight intensity={0.015} />

      <ScrollControls damping={5} pages={1}>
        <Scroll>
        <Content string="Me," position={[-width / 190, height/250, 0]}/>
          <Content string="Myself" position={[-width / 190+ 1.75, height/250, 0]}/>
          <Content string="and" position={[-width / 190+5, height/250, 0]}/>
          <Content string="I" position={[-width / 190+7, height/250, 0]}/>
          <Content string="Skills" position={[width / 300, height/250, 0]}/>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
        <p style={{
    color:"#202020",
    position: "absolute",
    top: `35vh`,
    left: "6vw",
    fontSize: "26em",
    fontWeight:"bold",
    letterSpacing:"-16px"
  }}>
       BLOG</p>
          <p style={{
    color:"white",
    position: "absolute",
    top: `30vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
      Hi there! Since childhood I've been very passionate </p>
      <p style={{
    color:"white",
    position: "absolute",
    top: `34vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
        about web. In this journey, I have learned various  </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `38vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
         Computer Science fundamentals and practical interpersonal </p>
        <p style={{
    color:"white",
    position: "absolute",
    top: `42vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
      skills like teamwork, networking, and leadership. </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `48vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
        I am a passionate Competitive Programmer and am </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `52vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       highly interested in Algorithmic Problem Solving </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `56vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       with a firm grasp in Data Structures and Algorithms.</p>

       <p style={{
    color:"white",
    position: "absolute",
    top: `62vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       If you have any query, dont hesitate to use the form!</p>

       <p style={{
    color:"white",
    position: "absolute",
    top: `30vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       C/C++</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `46vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       JavaScript</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `30vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       Java</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `38vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       ReactJs</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `46vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       ThreeJs</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `38vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       Python</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `54vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       CSS</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `54vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       HTML</p>

       <h1
      style={{
        position: "absolute",
        top: `31vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `39vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `47vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `55vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
               <h1
      style={{
        position: "absolute",
        top: `31vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `39vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `47vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `55vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
            
        </Scroll>
    </ScrollControls>

      
      <Curs />

    </Suspense>
  </Canvas>
    </>
  )
}
