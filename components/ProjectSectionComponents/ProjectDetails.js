import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import Tag from "../AboutSectionComponents/Tag";
import { projects } from "../Helpers/projects";
import { skillcolors } from "../Helpers/skillColors";

const ProjectDetails = ({ styles }) => {
  return (
    <div className={styles.projectcontainer}>
      <h1 className={styles.projectitle}>{projects[0].title}</h1>
      <p>
{projects[0].tags.map((e)=>e)}
      </p>
      <div className={styles.datepill}>
        <span>{projects[0].date} </span>
        <FaGithubAlt
          className={styles.gitbutton}
          href={projects[0].link}
        />
      </div>
      <ul className={styles.projectdetails}>
      {projects[0].details.map((e)=>e)}

      </ul>
    </div>
  );
};
export default ProjectDetails;
