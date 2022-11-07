const Tag = ({ skill, backcolor, color = "#393E46" }) => {
  console.log(backcolor);
  return (
    <span
      style={{
        backgroundColor: backcolor,
        color: color,
        padding: "4px",
        borderRadius: "10px",
      }}
    >
      {skill}
    </span>
  );
};

export default Tag;
