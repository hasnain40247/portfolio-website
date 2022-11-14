import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import { CreateClouds } from "./3DAssets/Clouds";
import { MoonMesh, ProfileMesh } from "./3DAssets/Profile";
import Stars from "./3DAssets/Stars";
import Loader from "./Loader";


const StarryDrop = () => {
  const ref = useRef();
  const pref = useRef();

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        height: "100%",
      }}
      id="canvas-container"
    >
      <Canvas camera={{ position: [0, 0, 36], fov: 75 }}>
        <ambientLight intensity={2} color={"#FEFBF6"} />
        <Suspense fallback={<Loader />}>
          <Stars container={ref} />
          <CreateClouds />
          <ProfileMesh pref={pref} />
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  );
};

function Rig() {
  const { viewport } = useThree();

  const vec = new THREE.Vector3();
  return useFrame(({ mouse, camera }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    camera.position.lerp(
      vec.set(
        (-x - camera.position.x) * 0.3,
        (-y - camera.position.y) * 0.3,
        camera.position.z
      ),
      0.2
    );
  });
}
export default StarryDrop;
