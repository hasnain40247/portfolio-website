import { FaGithubAlt } from "react-icons/fa";
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

          <a
            className={styles.gitbutton}
            target="_blank"
            href={""}
            rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
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
