import { useState } from "react";
import styles from "../styles/Home.module.css";
import emailjs from 'emailjs-com';


const ContactSection = () => {
  const [values, setValues] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  
  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    emailjs
      .send("service_fawcnpj","template_jma0ygp", values, "GPyW9el1m-GB9K_TY")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            from_name: "",
            email: "",
            message: "",
          });
         
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className={styles.contactsection}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#EEEEEE",
          padding: "1.5%",
          borderRadius: "15px",
          

          width: "67%",
        }}
      >
        <h3
          style={{
            alignSelf: "flex-start",
            msrgin: "10px",
          }}
          className={styles.projectitle}
        >
          Get In Touch
        </h3>

        <form
        onSubmit={handleSubmit}
          style={{
            display: "flex",

            flexDirection: "column",

            borderRadius: "10px",
            padding: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <input
                name="from_name"
                className={styles.contactinput}
                placeholder="Name"
                value={values.from_name}
                onChange={handleChange}
              />
              <input
                className={styles.contactinput}
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              rows={2}
              style={{
                flex: 2,
                resize: "none",
              }}
              draggable={false}
              className={styles.contactinput}
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            />
          </div>
          <button type="submit" 
          style={{
            cursor:"pointer"
          }}
          className={styles.contactbutton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactSection;
