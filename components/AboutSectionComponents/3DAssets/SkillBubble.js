import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const SkillBubble = () => {
  const skills = [
    "react",
    "cplusplus",
    "express",
    "flask",
    "flutter",
    "git",
    "heroku",
    "html5",
    "javascript",
    "mongodb",
    "node-js",
    "python",
    "tensorflow",
  ];

  const skillArray = () => {
    let count = 22;
    let skillArray = [];
    skills.map((e, i) => {
      var sign = i % 2 == 0 ? 1 : -1;
      var x = sign * Math.floor(Math.random() * (50 - 38 + 1) + 38);
      var y = count;
      count -= 3.5;

      var z = 0;

      const scale = Math.floor(Math.random() * (1.1 - 1 + 1) + 1);


      skillArray.push({
        positions: [x, y, z],
        scale: scale,
        skill: e,
      });
    });

    return skillArray;
  };

  const ref = useRef();

  const skilllist = skillArray().map((e, index) => (
    <Skill key={index} scale={e.scale} skill={e.skill} position={e.positions} />
  ));

  return <group ref={ref}>{skilllist}</group>;
};
const Skill = ({ scale, skill, position }) => {
  const { viewport } = useThree();
  const reff = useRef();
  const map = useLoader(TextureLoader, "skills/" + skill + ".png");
  map.encoding = THREE.sRGBEncoding;

  const vec = new THREE.Vector3();
  useFrame(({ mouse, camera }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    camera.position.lerp(
      vec.set(
        (-x - camera.position.x) * 0.1,
        (-y - camera.position.y) * 0.1,
        camera.position.z
      ),
      0.1
    );
  });

  const styles = useSpring({
    loop: true,
    to: [{ scale: 1.2 }, { scale: scale }],

    from: { scale: scale },
    config:{duration:2000}
  });
  return (
    <animated.mesh scale={styles.scale} ref={reff} position={position}>
      <circleGeometry args={[2, 32]} />
      <meshStandardMaterial transparent={"true"} map={map} />
    </animated.mesh>
  );
};
export default SkillBubble;
