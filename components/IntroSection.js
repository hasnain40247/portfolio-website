import styles from "../styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import StarryDrop from "./IntroSectionComponents/StarryDrop";


const IntroSection = () => {
  return (
    <div className={styles.introduction}>

<StarryDrop />


      <div
        style={{
          position: "absolute",
          cursor: "default",
          top: "27%",
        }}
      >
        <h1>Hello,</h1>
        <h1>I&apos;m Hasnain!</h1>

        <h1
          style={{
            color: "#222831",
          }}
        >
          I
          <span
            style={{
              color: "#FFD24C",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000}
              words={[" Learn.", " Code.", " Create."]}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};
export default IntroSection;
