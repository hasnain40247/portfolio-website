import styles from "../../styles/Home.module.css";


const Tag = ({ skill, backcolor, color  }) => {
  return (
    <span
      className={styles.tag}
      style={{
        backgroundColor: backcolor,
        filter: `drop-shadow(0px 2px 4px #1A${backcolor.split("#").shift()})`,
        color: color,
      }}
    >
      {skill}
    </span>
  );
};

export default Tag;
