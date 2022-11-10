import styles from "../styles/Home.module.css";
import IntroSection from "../components/IntroSection";
import SecondSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import { timelineData } from "../components/Helpers/work";
import { FaGithubAlt } from "react-icons/fa";
import {RiFilePaper2Fill} from "react-icons/ri"

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <div
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "-100px",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          fontSize: "2.3rem",
          padding: "0 15%",
          boxSizing: "border-box",
          justifyContent: "space-between",
          color: "#4d77ff",

          position: "sticky",
          zIndex: 100,
          top: 0,
        }}
      >
        <SiCodeigniter/>

        <FaGithubAlt />
      </div> */}
      <IntroSection />
      <div
        style={{
          width: "100%",
          top: "82%",
          height: "150px",
          backgroundImage: "linear-gradient(transparent,#EEEEEE)",
          position: "absolute",
        }}
      />
      <SecondSection />

      <ProjectsSection />
     
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
    </div>
  );
};

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
        <p style={{
          margin:"1px 0px",
          fontStyle:"italic"
        }}>{data.organization}</p>
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

        <ul className={styles.projectdetails}
          style={{
            textAlign: "left",
          }}
        >
          {data.description.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>

        <span className="circle">
    {data.category.icon}
        </span>
      </div>
    </div>
  );
};
export default Home;
