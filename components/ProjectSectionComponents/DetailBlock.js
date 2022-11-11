import styles from "../../styles/Home.module.css";
import Card from "./Card";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

const DetailBlock = ({ type, project, index }) => {
  return (
    <motion.div
      key={index}
      className={styles.detailblock}
      style={{
        flexDirection: type === "mobile" ? "row-reverse" : "row",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Card image={project.url} />
      <ProjectDetails project={project} styles={styles} />
    </motion.div>
  );
};
export default DetailBlock;
