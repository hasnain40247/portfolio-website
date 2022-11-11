import TimelineItem from "./WorkSectionComponents/TimelineComponent";
import { timelineData } from "../components/Helpers/work";
import styles from "../styles/Home.module.css";

const WorkSection = () => {
  return (
    <div className={styles.worksection}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
        className={styles.projectitle}
      >
        Work & Leadership
      </h1>
      {timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkSection
