import { useRef} from "react";
import { Trail} from "@react-three/drei";
import { useFrame,useThree} from "react-three-fiber";


export const Curs = ()=>{
    const { viewport } = useThree()
    const ref = useRef()
    useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
        
    ref.current.position.set(x, y, 0)
    ref.current.rotation.set(-y, x, 0)

  })

  return (
    <Trail 
        width={1.2} // Width of the line
        color={'hotpink'} // Color of the line
        // color={'#00CED1'}
        length={2} // Length of the line
        decay={1} // How fast the line fades away
        local={false} // Wether to use the target's world or local positions
        stride={0} // Min distance between previous and current point
        interval={1} // Number of frames to wait before next calculation
        target={undefined} // Optional target. This object will produce the trail.
        attenuation={(width) => width} // A function to define the width in each point along it.
    >
    
        <mesh ref={ref} castShadow scale={[0.02,0.02,0.02]}>
            <sphereBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" />
        </mesh>
    </Trail>
    
  )


}