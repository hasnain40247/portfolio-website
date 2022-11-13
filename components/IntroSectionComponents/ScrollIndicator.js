import { AiOutlineCaretDown } from "react-icons/ai";

const ScrollIndicator = () => {
  return (
    <div
      className="scrollindicator"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h5>Scroll Down</h5>
      <AiOutlineCaretDown />
    </div>
  );
};

export default ScrollIndicator
