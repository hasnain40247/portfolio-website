import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt, FaUnsplash } from "react-icons/fa";
import { GrLinkedin, GrLinkedinOption } from "react-icons/gr";
import { IoCamera } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { BsChatRightTextFill } from "react-icons/bs";

import styles from "../styles/Home.module.css";
export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222831",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FFD369",

        justifyContent: "space-between",
        padding: "1.5% 15%",
      }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: "bolder",
          textAlign: "center",
          verticalAlign: "center",
          color: "#EEEEEE",
        }}
      >
        <span
        style={{
          fontSize: "1rem",

        }}
        >
          <BsChatRightTextFill />
        </span>{" "}
        Connect With Me.
      </p>
      <div
        style={{
          backgroundColor: "#393E46",
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <GrLinkedinOption
          href="https://www.linkedin.com/in/hasnain-sikora/"
          className={styles.socialbutton}
        />
        <AiFillInstagram
          href="https://www.instagram.com/_.hasnainn._/"
          className={styles.socialbutton}
        />
        <FaGithubAlt
          href="https://github.com/hasnain40247"
          className={styles.socialbutton}
        />
        <IoCamera
          href="https://www.instagram.com/_.justsomeshots._/?hl=en"
          className={styles.socialbutton}
        />
        <SiLeetcode
          href="https://leetcode.com/hnsikora/"
          className={styles.socialbutton}
        />
        <FaUnsplash
          href="https://unsplash.com/@hasnainsikora"
          className={styles.socialbutton}
        />
      </div>

      <p>
        <span>Hasnain Sikora</span>
        <span
          style={{
            fontWeight: "bolder",
            margin: "0 5px",
            color: "#393E46",
            fontSize: "1.2rem",
          }}
        >
          |
        </span>
        © Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};
