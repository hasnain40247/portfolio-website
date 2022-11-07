import styles from "../styles/Home.module.css";
import Tag, { skillcolors } from "./AboutSectionComponents/Tag";
import { projects } from "./Helpers/projects";
import Card from "./ProjectSectionComponents/Card";
import ProjectDetails from "./ProjectSectionComponents/ProjectDetails";

const ProjectsSection = () => {
  let project = projects[0];
  return (
    <div className={styles.projectsection}>
      <Card url={project.url} />
      <ProjectDetails
        title={project.title}
        tags={project.tags}
        date={project.date}
        link={project.link}
        details={project.details}
        styles={styles}
      />
    </div>
  );
};

export default ProjectsSection;
