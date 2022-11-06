import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const CreateClouds = (props) => {
  const refer = useRef();
  useFrame((state, delta) => {
    refer.current.children.map((e, i) => {
      e.position.z += 0.08;
      if (e.position.z - state.camera.position.z > -55)
        e.material.opacity -= 0.0004;
      else if (
        e.position.z - state.camera.position.z > -150 ||
        e.position.z - state.camera.position.z <= -130
      )
        e.material.opacity += 0.007;
      if (e.position.z - state.camera.position.z > -20) {
        e.material.opacity = 0;

        e.position.z = Math.floor(Math.random() * (-145 - -130 + 1) + -130);

        e.position.needsUpdate = true;
      }
    });
  });

  function createCloud() {
    let clouds = [];
    for (var i = 0; i < 250; i++) {
      var x = Math.floor(Math.random() * (220 - -220 + 1) + -220);
      var y = Math.floor(Math.random() * (-35 - -48 + 1) + -48);
      var z = Math.floor(Math.random() * (-20 - -150 + 1) + -150);
      var rotateZ = Math.floor(Math.random() * 361 + 180);
      var scale = Math.floor(Math.random() * 1.5 + 1);

      clouds[i] = {
        positions: [x, y, z],
        color: i % 2 === 0 ? 1 : 0,
        rotateZ,
        scale,
      };
    }
    return clouds;
  }
  const colorMap = useLoader(TextureLoader, "mycloud.png");

  return (
    <group ref={refer}>
      {createCloud().map((cords, index) => (
        <Clouds
          key={index}
          position={cords.positions}
          map={colorMap}
          scale={cords.scale}
          rotateZ={cords.rotateZ}
          color={cords.color}
        />
      ))}
    </group>
  );
};

const Clouds = ({ position, color, map, rotateZ, scale }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.z =
      color === 1
        ? ref.current.rotation.z + 0.01 * delta
        : ref.current.rotation.z - 0.01 * delta;
  });

  return (
    <mesh ref={ref} position={position} rotateZ={rotateZ} scale={scale}>
      <planeBufferGeometry args={[30, 30]} />
      <meshStandardMaterial
        map={map}
        transparent={true}
        opacity={color === 1 ? 1 : 0.8}
        color={color === 1 ? "#FFB9B9" : "#EEEEEE"}
      />
    </mesh>
  );
};



export default Clouds;
