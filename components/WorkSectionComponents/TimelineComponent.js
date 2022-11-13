import { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import styles from "../../styles/Home.module.css";

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3
          style={{
            margin: "1px 0px",
          }}
        >
          {data.title}
        </h3>
        <p
          style={{
            margin: "1px 0px",
            fontStyle: "italic",
          }}
        >
          {data.organization}
        </p>
        <div className={styles.datepill}>
          <span>{data.date} </span>
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

          {data.links.github && (
            <a
              className={styles.gitbutton}
              target="_blank"
              href={data.links.github}
              rel="noopener noreferrer"
            >
              <FaGithubAlt />
            </a>
          )}
          {data.links.paper && (
            <a
              className={styles.gitbutton}
              target="_blank"
              href={data.links.paper}
              rel="noopener noreferrer"
            >
              <RiFilePaper2Fill />
            </a>
          )}
        </div>

        <ul
          className={styles.projectdetails}
          style={{
            textAlign: "left",
          }}
        >
          {data.description.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>

        <span className="circle">{data.category.icon}</span>
      </div>
    </div>
  );
};
export default TimelineItem;
