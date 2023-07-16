import { Vector3 } from 'three'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'

import React from 'react'


export const Lights=()=> {

    return (
      <>
        <MovingSpot color="#0c8cbf" position={[6, 6, 2]} />
        <MovingSpot color="#898989" position={[4, 6, 0]} />

      </>
    )
  }
  
  function MovingSpot({ vec = new Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={1} distance={15} angle={0.35} attenuation={10} anglePower={4} intensity={2} {...props} />
  }