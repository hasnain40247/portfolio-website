import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

import Card from "./Card";
import ProjectDetails from "./ProjectDetails";
const DetailBlock = ({ project, index }) => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 500 },
  });

  useEffect(() => {
    console.log(state);
    toggle(state=>!state);
    console.log(state);

  }, [index]);
  return (
    <animated.div
      key={index}
      style={{
        opacity: x.to({ range: [0, 1], output: [0.7, 1] }),
        scale: x.to({ range: [0, 1], output: [0.97, 1] }),
      }}
      className={styles.detailblock}
    >
      <Card url={project.url} />
      <ProjectDetails
        title={project.title}
        tags={project.tags}
        date={project.date}
        link={project.link}
        details={project.details}
        styles={styles}
      />
    </animated.div>
  );
};
export default DetailBlock;
