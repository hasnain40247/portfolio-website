import DetailBlock from "./DetailBlock";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { projects } from "../Helpers/projects";
import HiddenIcons from "./HiddenIcons";

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
      }}
    >
      <HiddenIcons index={index} setIndex={setIndex} length={projects.length}/>

      <div
        className="carosel"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AiFillLeftCircle
          onClick={() => setIndex(index - 1 <= 0 ? 0 : index - 1)}
          className={styles.arrowbutton}
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
          onClick={() =>
            setIndex(index + 1 <= projects.length - 1 ? index + 1 : index)
          }
          className={styles.arrowbutton}
          style={{
            color: "#393E46",
            flex: 1,

            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default ProjectCarousel;
