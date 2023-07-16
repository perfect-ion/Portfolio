import { But } from "./But";
import { Frm } from "./Frm";
import React, { useState, useEffect } from 'react';
import { Badge } from "react-bootstrap";


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


export const HtmlContent = () => {
  const [h,w] = useWindowSize()

    return (
      <><h1
      style={{
        position: "absolute",
        top: `10vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.4em",
      }}
    >
      #include bits/stdc++.h
    </h1>
    <h1
      style={{
        position: "absolute",
        top: `13vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.4em",
      }}
    >
      int main &#123;
    </h1>
    <h1
      style={{
        position: "absolute",
        top: `16vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.4em",
      }}
    >
      cout &#8810;
    </h1>
    <h1
      style={{
        position: "absolute",
        top: `65vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.4em",
      }}
    >
      &#8810; endl;
    </h1>
    <h1
      style={{
        position: "absolute",
        top: `68vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.4em",
      }}
    >
      return 0;
    </h1>
  
    <h1
      style={{
        position: "absolute",
        top: `225vh`,
        color: "#999999",
        left: "12vw",
        fontSize: "1.6em",
      }}
    >
      cin &#8811;
    </h1>
    <p style={{
    color:"#202020",
    position: "absolute",
    top: `135vh`,
    left: "6vw",
    fontSize: "26em",
    fontWeight:"bold",
    letterSpacing:"-16px"
  }}>
       BLOG</p>
          <p style={{
    color:"white",
    position: "absolute",
    top: `130vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
      Hi there! Since childhood I've been very passionate </p>
      <p style={{
    color:"white",
    position: "absolute",
    top: `134vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
        about web. In this journey, I have learned various  </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `138vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
         Computer Science fundamentals and practical interpersonal </p>
        <p style={{
    color:"white",
    position: "absolute",
    top: `142vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
      skills like teamwork, networking, and leadership. </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `148vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
        I am a passionate Competitive Programmer and am </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `152vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       highly interested in Algorithmic Problem Solving </p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `156vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       with a firm grasp in Data Structures and Algorithms.</p>

       <p style={{
    color:"white",
    position: "absolute",
    top: `162vh`,
    left: "16.5vw",
    fontSize: "1.4em"
  }}>
       If you have any query, dont hesitate to use the form!</p>

       <p style={{
    color:"white",
    position: "absolute",
    top: `130vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       C/C++</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `146vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       JavaScript</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `130vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       Java</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `138vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       ReactJs</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `146vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       ThreeJs</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `138vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       Python</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `154vh`,
    left: "69vw",
    fontSize: "1.4em"
  }}>
       CSS</p>
       <p style={{
    color:"white",
    position: "absolute",
    top: `154vh`,
    left: "81vw",
    fontSize: "1.4em"
  }}>
       HTML</p>

       <h1
      style={{
        position: "absolute",
        top: `131vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `139vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `147vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
           <h1
      style={{
        position: "absolute",
        top: `155vh`,
        color: "#494949",
        left: "63vw",
        fontSize: "1.4em",
      }}
    >cout &#8810;</h1>
               <h1
      style={{
        position: "absolute",
        top: `131vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `139vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `147vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>
                   <h1
      style={{
        position: "absolute",
        top: `155vh`,
        color: "#494949",
        left: "89vw",
        fontSize: "1.4em",
      }}
    >&#8810; endl;</h1>



        <div style={{ position: "absolute", left: "12vw", top: "75vh" }}>
          <But string="Contact Me!" />
        </div>
  
        <div style={{ position: "absolute", left: "15.5vw", top: "231vh" }}>
          <Frm />
        </div>
        <div style={{ position: "absolute", left: "91vw", top: "3vh" }}>
        <Badge pill bg="light" text="dark">
          Scroll Down &#8675;
        </Badge>{' '}
        </div>
        <div style={{ position: "absolute", left: "91vw", top: "103vh" }}>
        <Badge pill bg="light" text="dark">
          Scroll Down &#8675;
        </Badge>{' '}
        </div>
      </>
    );
  };