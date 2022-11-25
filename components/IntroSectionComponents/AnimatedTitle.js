import styles from "../../styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";
const AnimatedTitle = () => {
  return (
    <div className="titleDiv" >
      <h1 className="titleDiv-h1">Hello,</h1>
      <h1 className="titleDiv-h1">I&apos;m Hasnain!</h1>

      <h1
        style={{
          color: "#222831",
        }}
        className="titleDiv-h1"
      >
        I
        <span
          style={{
            color: "#FFD24C",
            fontStyle: "italic",
          
            fontWeight: "bold",
            backgroundColor:"red",
            zIndex:10
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
  );
};
export default AnimatedTitle;
