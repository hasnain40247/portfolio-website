import styles from "../styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import StarryDrop from "./IntroSectionComponents/StarryDrop";
import ScrollIndicator from "./IntroSectionComponents/ScrollIndicator";
import ProfileImage from "./IntroSectionComponents/ProfileImage";

const IntroSection = () => {
  return (
    <div className={styles.introduction}>
         <div className="titleDiv">
        <h1 className="titleDiv-h1">Hello,</h1>
        <h1 className="titleDiv-h1">I&apos;m Hasnain!</h1>

        <h1
          style={{
            color: "#222831",
            zIndex:1,
            position:"relative"
          }}
          className="titleDiv-h1"
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
              typeSpeed={90}
              deleteSpeed={100}
              delaySpeed={100}
              words={[" Learn.", " Code.", " Create."]}
            />
          </span>
        </h1>
      </div>
      <StarryDrop />
      <ProfileImage />
   
      <ScrollIndicator />
    </div>
  );
};
export default IntroSection;
