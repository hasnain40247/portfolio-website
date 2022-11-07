import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import Tag from "../AboutSectionComponents/Tag";
import { projects } from "../Helpers/projects";
import { skillcolors } from "../Helpers/skillColors";

const ProjectDetails = ({ title, tags, date, link, details, styles }) => {
  return (
    <div className={styles.projectcontainer}>
      <h1 className={styles.projectitle}>{title}</h1>
      <p>
        {tags.map((e, index) => (
          <Tag
            key={index}
            skill={e.skill}
            backcolor={e.backcolor}
            color={e.color}
          />
        ))}
      </p>
      <div className={styles.datepill}>
        <span>{date} </span>
        <span style={{
          fontWeight:"bolder",
          color:"#FFD369",
          fontStyle:"normal",
          margin:"0px 8px"
        }}>|</span>

        <FaGithubAlt className={styles.gitbutton} href={link} />
      </div>
      <ul className={styles.projectdetails}>
        {details.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectDetails;
