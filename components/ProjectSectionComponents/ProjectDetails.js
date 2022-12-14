import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import {HiComputerDesktop} from "react-icons/hi2"
import Tag from "../AboutSectionComponents/Tag";
import { projects } from "../Helpers/projects";
import { skillcolors } from "../Helpers/skillColors";

const ProjectDetails = ({ project, styles }) => {
  return (
    <div className={styles.projectcontainer}>
      <h1
        style={{
          fontSize: "1.7rem",
        }}
        className={styles.projectitle}
      >
        {project.title}
      </h1>
      <p
        style={{
          lineHeight: 2,
        }}
      >
        {project.tags.map((e, index) => (
          <Tag
            key={index}
            skill={e.skill}
            backcolor={e.backcolor}
            color={e.color}
          />
        ))}
      </p>
      <div className={styles.datepill}>
        <span>{project.date} </span>
        <span
          style={{
            fontWeight: "bolder",
            color: "#FFD369",
            fontStyle: "normal",
            margin: "0px 8px",
          }}
        >
          |
        </span>

   
          <a className={styles.gitbutton} target="_blank" href={project.link}
          rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
          {project.demo &&
              <a className={styles.gitbutton} target="_blank" href={project.link}
              rel="noopener noreferrer"
              >
                <HiComputerDesktop/>
              </a>
          }
     
      </div>
      <ul className={styles.projectdetails}>
        {project.details.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectDetails;
