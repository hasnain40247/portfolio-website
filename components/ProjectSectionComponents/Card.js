import styles from "../../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { projects } from "../Helpers/projects";

const Card = ({ image }) => {
  let bounds;
  let card;



  function mouseEnter() {
    bounds = card.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  }
  function mouseLeave() {
    document.removeEventListener("mousemove", rotateToMouse);
    card.style.transform = "";

  }

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
    card.querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
 
  }
  useEffect(() => {
    card = document.getElementById("card");

    card.addEventListener("mouseenter", mouseEnter);
    card.addEventListener("mouseleave", mouseLeave);

  }, []);

  return (
    <div
      id="card"
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className="glow"
        style={{
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default Card;
