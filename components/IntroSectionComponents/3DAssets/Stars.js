import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random";
import {  useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";



const Stars=(props)=> {
    const { viewport } = useThree();
  
    const vec = new THREE.Vector3();
  
    const ref = useRef();
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(10000), { radius: 130 })
    );
  
      useFrame(({ mouse, camera }) => {
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
  
        ref.current.position.lerp(
          vec.set(
            (-x - camera.position.x) * 0.3,
            (-y - camera.position.y) * 0.3,
            ref.current.position.z
          ),
          0.7
        );
        ref.current.updateMatrixWorld();
      });
    
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color="#EEEEEE"
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }

  export default Stars