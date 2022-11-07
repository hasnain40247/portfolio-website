import styles from "../styles/Home.module.css";
import Tag, { skillcolors } from "./AboutSectionComponents/Tag";
import Card from "./ProjectSectionComponents/Card";
import ProjectDetails from "./ProjectSectionComponents/ProjectDetails";

const ProjectsSection = () => {
  return (
    <div className={styles.projectsection}>
      <Card  />
  <ProjectDetails styles={styles}/>
    </div>
  );
};

export default ProjectsSection;
