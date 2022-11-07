import styles from "../../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { projects } from "../Helpers/projects";

const Card = ({url}) => {
  const [bounds, setBounds] = useState({});
  const [transform, setTransform] = useState("");
  const [backradial, setBackRadial] = useState(
    "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)"
  );

  useEffect(() => {
    let rect = document.getElementById("card").getBoundingClientRect();
    setBounds(rect);
  }, []);
  return (
    <div
      id="card"
      onMouseMove={(event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        console.log(distance);

        setTransform(`
scale3d(1.07, 1.07, 1.07)
rotate3d(
  ${center.y / 100},
  ${-center.x / 100},
  0,
  ${Math.log(distance) * 2.5}deg
)
`);

        setBackRadial(`
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `);
      }}
      className={styles.card}
      style={{
        transform: transform,

        backgroundImage: `url(${url})`,
      }}
      onMouseLeave={() => {
        setTransform("");
        // $card.style.background = '';
      }}
    >
      <div
        id="glow"
        style={{
          backgroundImage: backradial,
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default Card;
