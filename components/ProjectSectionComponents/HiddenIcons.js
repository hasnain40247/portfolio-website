import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "../../styles/Home.module.css";

const HiddenIcons = ({index,setIndex, length}) => {
  return (
    <div
    className="hiddenicons"
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf:"flex-end",
        backgroundColor:"#393E46",
        margin:"10px",
        borderRadius:"20px",
        justifyContent: "center",
        padding:"3px",
        width: "25%",
      }}
    >
      <AiFillLeftCircle
        onClick={() => setIndex(index - 1 <= 0 ? 0 : index - 1)}
        className={styles.gitbutton}
        style={{
          color: "#EEEEEE",
          cursor: "pointer",
          flex: 1,
        }}
      />
      <AiFillRightCircle
        onClick={() =>
            setIndex(index + 1 <= length - 1 ? index + 1 : index)
          }
        className={styles.gitbutton}
        style={{
          color: "#EEEEEE",
          cursor: "pointer",
          flex: 1,
        }}
      />
    </div>
  );
};


export default HiddenIcons