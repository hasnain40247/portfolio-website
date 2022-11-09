import styles from "../styles/Home.module.css";
import { projects } from "./Helpers/projects";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";
import DetailBlock from "./ProjectSectionComponents/DetailBlock";

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className={styles.projectsection}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
        className={styles.projectitle}
      >
        Projects
      </h1>
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
          onClick={() => {
            setIndex(index - 1 <= 0 ? 0 : index - 1);
            console.log("hello");
            console.log(index);
          }}
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
          onClick={() => {
            setIndex(index + 1 <= projects.length - 1 ? index + 1 : index);

            console.log("hello");
            console.log(index);
          }}
          className={styles.gitbutton}
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

export default ProjectsSection;
{
  /* <h1  style={{
  textAlign:"center",
  marginTop:"10px"
}} className={styles.projectitle}>Projects</h1>

<div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  }}
>
  <AiFillLeftCircle
    onClick={() => {
      setIndex(index - 1 <= 0 ? 0 : index - 1);
      console.log("hello");
      console.log(index);
    }}
    className={styles.gitbutton}
    style={{
      color: "#393E46",
      zIndex: 100,
      cursor: "pointer",

      margin: "20px",
    }}
  />
  {projects.map((project, i) => {
    if (index == i) {
      return <DetailBlock index={index} key={i} project={project} />;
    } else return null;
  })}

  <AiFillRightCircle
    onClick={() => {
      setIndex(index + 1 <= projects.length - 1 ? index + 1 : index);

      console.log("hello");
      console.log(index);
    }}
    className={styles.gitbutton}
    style={{
      zIndex: 100,

      color: "#393E46",
      margin: "20px",
    }}
  />
</div> */
}
