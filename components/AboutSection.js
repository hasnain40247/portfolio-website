import { FaGithubAlt } from "react-icons/fa";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { FaPagelines } from "react-icons/fa";

import Tag from "./AboutSectionComponents/Tag";
import { Suspense } from "react";
import SkillBubble from "./AboutSectionComponents/3DAssets/SkillBubble";
import { AiFillProfile } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className={styles.secondsection}>
      <Canvas
        style={{
          backgroundColor: "transparent",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",

          position: "absolute",
        }}
        camera={{ position: [0, 0, 36], fov: 75 }}
      >
        <ambientLight intensity={1} color={"#EEEEEE"} />
        <Suspense fallback={null}>
          <SkillBubble />
        </Suspense>
      </Canvas>

      <div className={styles.container}>
        <h1
          className="aboutitle"
          style={{
            color: "#ffd369",
            margin: "0",
            fontWeight: "900",
            fontSize: "3rem",
          }}
        >
          Who am I?
        </h1>

        <p
          className="aboutcontent"
          style={{
            lineHeight: 2,
            fontSize: "1.2rem",
            color: "#393E46",
          }}
        >
          I am currently a student majoring in Artificial Intelligence and
          Machine Learning. I think of myself as someone whose creativity is
          constantly bursting out and finding new ways to materialize itself. I
          have always enjoyed anything that could present a medium to channel my
          creativity. Such is the case with coding and creating beautiful
          applications. It is apparent that the more you learn, the more you are
          aware of the undiscovered and the fact that the bounds to which
          programming extends to are almost limitless makes it the perfect
          oppurutinity to learn and grow. Although my primary objective is to
          research algorithmic applications of AI in various sectors, I have had
          a commendable experience with developmental frameworks and
          applications. I have so far developed applications using{" "}
          <Tag skill={"Python"} backcolor={"#fcec74"} />,{" "}
          <Tag skill={"React-Native"} backcolor={"#61dafb"} />,{" "}
          <Tag skill={"Flutter"} backcolor={"#00c7fa"} />,{" "}
          <Tag skill={"React.JS"} backcolor={"#222222"} color={"#EEEEEE"} />,{" "}
          <Tag skill={"Node.JS"} backcolor={"#83cd29"} />,{" "}
          <Tag skill={"Flask"} backcolor={"#6d6d6d"} color={"#EEEEEE"} /> and
          many more. Check my projects out at{" "}
          <span>
            <a
              href="https://github.com/hasnain40247"
              className={styles.gitlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {""}
              <FaGithubAlt
                className="gitabout"
                style={{
                  fontSize: "2rem",
                  position: "relative",
                  alignSelf: "center",
                  top: "10px",
                }}
              />
            </a>
          </span>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ZQ2CxVqe5kKTUo9097_8b7Qe5d1OForB/view?usp=sharing"
          className={styles.resumebutton}
        >
          <AiFillProfile
            style={{
              marginRight: 10,
            }}
          />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};
export default AboutSection;
