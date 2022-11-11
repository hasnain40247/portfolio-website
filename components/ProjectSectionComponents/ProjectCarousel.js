import DetailBlock from "./DetailBlock";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { projects } from "../Helpers/projects";

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AiFillLeftCircle
        onClick={() => setIndex(index - 1 <= 0 ? 0 : index - 1)}
        className={styles.gitbutton}
        style={{
          color: "#393E46",
          cursor: "pointer",
          flex: 1,
        }}
      />
      {projects.map((project, i) => {
        if (index == i) {
          return <DetailBlock index={index} key={i} project={project} />;
        } else return null;
      })}

      <AiFillRightCircle
        onClick={() => setIndex(index + 1 <= projects.length - 1 ? index + 1 : index)
        }
        className={styles.gitbutton}
        style={{
          color: "#393E46",
          flex: 1,

          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ProjectCarousel;
