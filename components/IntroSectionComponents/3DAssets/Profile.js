import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const ProfileMesh = () => {
  const pref = useRef();
  const map = useLoader(TextureLoader, "profile.png");
  map.encoding = THREE.sRGBEncoding;
  const { viewport } = useThree();

  const vec = new THREE.Vector3();


  return (
    <mesh ref={pref} position={[-30, 0, 10]}>
      <planeBufferGeometry args={[20, 20]} />
      <meshBasicMaterial transparent={true} opacity={1} map={map} />
    </mesh>
  );
};


