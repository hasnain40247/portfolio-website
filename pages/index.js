import styles from "../styles/Home.module.css";
import IntroSection from "../components/IntroSection";
import SecondSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";


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
      

      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Home;
