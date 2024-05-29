import { RiFilePaper2Fill } from "react-icons/ri";
import { BsFillFileCodeFill } from "react-icons/bs";

import Tag from "../AboutSectionComponents/Tag";
import { skillcolors } from "./skillColors";
import { AiFillMobile } from "react-icons/ai";

export const timelineData = [
  {
    title: "Undergraduate Teaching Assistant",
    organization: "Northeastern University, Boston",
    date: "Ongoing",
    links: {
      github: "blank"
    },
    description: [
      <span key={"1"}>
        Developed several autograder scripts with test-suites for various assignments using{" "}
        <Tag skill={"Python"} backcolor={skillcolors.python} /> and{" "}
      </span>,
      <span key={"2"}>
        Curated lecture notes with detailed walkthroughs of algorithms and topics in AI including {" "}  <Tag skill={"Advasarial ML"} backcolor={skillcolors.python} /> and {" "}  <Tag skill={"Deep Learning"} backcolor={skillcolors.python} />
      </span>,
      <span key={"6"}>
        Designed comprehensive homework and lab assignments to reinforce NLP concepts like <Tag skill={"LSTM"} backcolor={skillcolors.python} /> and {" "}  <Tag skill={"Sparse Vectors"} backcolor={skillcolors.python} />
      </span>,
      <span key={"3"}>
      Aided students with conceptual doubts and technical coursework.
      </span>,
    ],
    category: {
      icon: (
        <RiFilePaper2Fill
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
  {
    title: "Full-Stack Intern",
    organization: "Wendor.in",
    links: {
      github: "wendor.in"
    },
    description: [
      <span key={"1"}>
        Worked on developing the company&apos;s dashboard using{" "}
        <Tag skill="TypeScript" backcolor={skillcolors.typescript} color="#eeeeee" /> ,
        <Tag skill="React" backcolor={skillcolors.react} color="#eeeeee" />,{" "}
        <Tag skill="Nest.JS" backcolor={skillcolors.nest} color="#eeeeee" />{" "}
        <Tag skill="Next.JS" backcolor={skillcolors.next} />and{" "}
        <Tag skill="PostGreSQL" backcolor={skillcolors.postgres} color="#eeeeee" />
      </span>,
      <span key={"2"}>

        Implemented multiple features, improvements and bug-fixes on the company dashboard. This included, mood-boarding the UI, creating custom APIs, components and pushing them to production.</span>
      , <span key={"3"}>
        Involved in multiple meetings discussing and sharing alternative UI designs, additional features and implementation workflows.
      </span>
      , <span key={"4"}>

        Performed a thorough component version-update of the company dashboard.
      </span>,
      <span key={"5"}>

        Performed a complete rewrite of a preexisting NV9 payment module into TypeScript.
      </span>,
      <span key={"6"}>

        Wrote extensive test-scripts for the company&apos;s Kiosk APIs on postman, integrate the tests with Newman and host them with Jenkins.
      </span>
      , <span key={"7"}>

        Added critical functionalities to the Kiosk; Used MQTT to create and push features which were essential in enhancing accessibility and communication between the Dashboard and the Kiosk.
      </span>,
      <span key={"8"}>
        Integrated AWS&apos;s SQS and SNS service to individually construct a fundamental event-based notification service hosted up on the dashboard and the kiosk.
      </span>
    ],
    date: "Dec 2022 -June 2023",
    category: {
      icon: (
        <BsFillFileCodeFill
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
  {
    title: "Research Intern",
    organization: "VIT, Chennai",
    date: "Ongoing",
    links: {
      github: "blank"
    },
    description: [
      <span key={"1"}>
        Proposed and implemented a novel approach to medical image
        classification using Quantum computing using{" "}
        <Tag skill={"Python"} backcolor={skillcolors.python} /> and{" "}
        <Tag skill={"Pennylane.ai"} backcolor={skillcolors.pennylane} />
      </span>,
      <span key={"2"}>
        Writing a paper comparing the efficiency of parallelism in image
        classification between QCNN, Quanvolutional network and traditional
        CNNs.
      </span>,
      <span key={"6"}>
         Received AWS funding proposal acceptance from Ministry of Electronics and Information Technology (MeitY) Quantum Computing Applications Lab and credits to take a complete advantage of the Quantum computers offered by AWS Braket.
      </span>,
      <span key={"3"}>
        Used various quantum simulators and computers offered by AWS and
        pennylane to construct parameterized quantum gates that take encoded
        qubits and subjects them to unitary operations that simulate a
        convolutional and max-pooling layer.
      </span>,
    ],
    category: {
      icon: (
        <RiFilePaper2Fill
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
  {
    title: "Research Paper",
    organization: "ICGIM'2022",
    date: "March, 2022",
    links: {
      github: "",
      paper: "https://www.scribd.com/document/605514182/ICGIM-2022-Proceedings",
    },
    description: [
      <span key={"1"}>
        Implemented an approach for network intrusion detection using
        <Tag skill={"Autoencoders"} backcolor={skillcolors.python} /> and{" "}
        <Tag skill={"Genetic Algorithm"} backcolor={skillcolors.pennylane} />
      </span>,
      <span key={"2"}>
        Thorough research and comparision of verious traditional methods on the
        dataset juxtaposed with proposed model.
      </span>,
      <span key={"3"}>
        Created an autoencoder which is trained on a feature-reduced NSL-KDD
        dataset whose encoder learns to reconstruct mallicious datapoints to
        patternize the problem.
      </span>,
      <span key={"4"}>
        Used the generative population evolution to select best suited weights
        for the autoencoder model.
      </span>,
    ],
    category: {
      icon: (
        <RiFilePaper2Fill
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
  {
    title: "Software Developer Intern",
    organization: "Skybase IT",
    links: {
      github: "https://github.com/hasnain40247/gmap_vehicle_navigation"
    },
    description: [
      <span key={"1"}>
        Implemented various web and mobile applications using{" "}
        <Tag skill="PHP" backcolor={skillcolors.php} /> ,
        <Tag skill="MySQL" backcolor={skillcolors.sql} />,{" "}
        <Tag skill="Javascript" backcolor={skillcolors.javascript} /> and{" "}
        <Tag skill="Java" backcolor={skillcolors.java} />
      </span>,
      <span key={"2"}>
        Developed applications using Google Cloud APIs such as Directions,
        Geocoding, Places and Maps SDK.
      </span>,
      <span key={"3"}>
        Attended regular task updates and drafting methodology write-ups
      </span>,
      <span key={"4"}>
        Additionally, integrated map&#38;s customisability using Google maps
        Polygons and Waypoints services.
      </span>,
      <span key={"5"}>
        Used <Tag skill={"Java"} backcolor={skillcolors.java} /> to make mobile
        native versions of the websites using various utility packages.
      </span>,
    ],
    date: "Jun-Sept 2021",
    category: {
      icon: (
        <BsFillFileCodeFill
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
  {
    title: "App Development Head",
    organization: "HackClub, VIT",
    links: {
      github: "https://github.com/HackclubVIT"
    },
    description: [
      <span key={"1"}>
        Led a team of enthusiastic app developers to design and create android
        apps using <Tag skill={"Flutter"} backcolor={skillcolors.flutter} /> and{" "}
        <Tag skill={"React Native"} backcolor={skillcolors.reactnative} /> along
        with <Tag skill={"Firebase"} backcolor={skillcolors.firebase} /> in
        collaboration with other university clubs
      </span>,
      <span key={"2"}>
        Organized meetings, delegated tasks and recruited members for an
        efficient workflow of the club
      </span>,
      <span key={"3"}>
        Hosted a <Tag skill={"Flutter"} backcolor={skillcolors.flutter} />{" "}
        workshop for the HackClub&#39;s university event with over 120
        participants
      </span>,
      <span key={"4"}>
        Interviewer for multiple club recruitments as well as part of the
        judging panel for hackathons
      </span>,
      <span key={"5"}>
        Mentored and guided students through{" "}
        <Tag skill={"Web 3.0"} backcolor={skillcolors.web3} /> storage and
        decentralized apps using Crust and Polygon at a 48-hour university
        Hackathon
      </span>,
    ],
    date: "Jun 2021 - July 2022",
    category: {
      icon: (
        <AiFillMobile
          style={{
            fontSize: "1.3rem",
            color: "#FFD369",
          }}
        />
      ),
    },
  },
];
