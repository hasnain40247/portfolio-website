import Tag from "../AboutSectionComponents/Tag";
import { skillcolors } from "../Helpers/skillColors";

export const projects = [
  {
    title: "Habit-y, Productivity App",
    tags: [
      { skill: "ReactJS", backcolor: skillcolors.react, color: "#EEEEEE" },
      { skill: "ThreeJS", backcolor: skillcolors.three, color: "#EEEEEE" },
      { skill: "ElectronJS", backcolor: skillcolors.electron, color: "#393E46" },
    ],
    url: "https://raw.githubusercontent.com/hasnain40247/habity-productivity-markdown-app/master/public/mark.png",
    date: "Sept, 2022",
    link: "https://github.com/hasnain40247/habity-productivity-markdown-app",
    details: [
      "Implemented Transfer learning using TensorFlow Model zoo.",

      "Trained and fine-tuned a Single Shot Detector model using an independently created dataset consisting of sign language alphabets and phrases.",

      "Implemented the model into a flask application primarily dependent on the in-browser OpenCV capability.",
    ],
  },
  {
    title: "AI Sign Language",
    tags: [
      { skill: "Python", backcolor: skillcolors.python, color: "#393E46" },
      { skill: "OpenCV", backcolor: skillcolors.opencv, color: "#393E46" },
      { skill: "Flask", backcolor: skillcolors.flask, color: "#EEEEEE" },
    ],
    url: "https://raw.githubusercontent.com/hasnain40247/AISignLanguageTranslation/master/thanks.png",
    date: "Apr, 2021",
    link: "https://github.com/hasnain40247/AISignLanguageTranslation",
    details: [
      "Implemented Transfer learning using TensorFlow Model zoo.",

      "Trained and fine-tuned a Single Shot Detector model using an independently created dataset consisting of sign language alphabets and phrases.",

      "Implemented the model into a flask application primarily dependent on the in-browser OpenCV capability.",
    ],
  },
  {
    title: "Music Genre Recognition",
    tags: [
      { skill: "Python", backcolor: skillcolors.python, color: "#393E46" },
      { skill: "HTML", backcolor: skillcolors.html, color: "#393E46" },
      { skill: "CSS", backcolor: skillcolors.css, color: "#393E46" },

      { skill: "Flask", backcolor: skillcolors.flask, color: "#EEEEEE" },
    ],
    url: "https://raw.githubusercontent.com/hasnain40247/MusicGenreModels/master/snapshots/calculation.png",
    date: "Mar, 2021",
    link: "https://github.com/hasnain40247/MusicGenreModels",
    details: [
      "Supervised learning algorithms using a labeled dataset of both indian and western music.",
      "Implemented machine learning models like RNN, SVM and CNN",
      "Performed variations of activation functions and optimizers to ensure highest accuracy.",
      "Ported to a front-end web application that computes genre.",
    ],
  },

  {
    title: "Flutter Period tracker",
    tags: [
      { skill: "Flutter", backcolor: skillcolors.flutter, color: "#393E46" },
      { skill: "Firebase", backcolor: skillcolors.firebase, color: "#393E46" },
      { skill: "Dart", backcolor: skillcolors.dart, color: "#393E46" },
    ],
    url: "https://i.imgur.com/MUjL1Pl.png",
    date: "Jan, 2021",
    link: "https://github.com/HackclubVIT/naari_Android",
    details: [
      "Led and collaborated with a team of 3, organized meetings and delegated tasks.,",
      "Designed UI from scratch based on several figma mockups crafted by the design team",
      "Implemented Email and Google authentication using firebase. Added firebase cloud firestore functionality to store user settings and data.",
      "Enforced an in-app podcast player with full fledged MP3 controls.",
    ],
  },
  {
    title: "Online Breakroom supplies store",
    tags: [
      { skill: "NodeJS", backcolor: skillcolors.python, color: "#393E46" },
      { skill: "HTML", backcolor: skillcolors.html, color: "#393E46" },
      { skill: "CSS", backcolor: skillcolors.css, color: "#EEEEEE" },

      {
        skill: "Bootstrap",
        backcolor: skillcolors.bootstrap,
        color: "#EEEEEE",
      },
      {
        skill: "Javascript",
        backcolor: skillcolors.javascript,
        color: "#393E46",
      },
      { skill: "MongoDB", backcolor: skillcolors.mongo, color: "#393E46" },
      { skill: "ExpressJS", backcolor: skillcolors.express, color: "#EEEEEE" },
    ],
    url: "https://user-images.githubusercontent.com/52504037/159111107-6e96d6db-915b-456d-b562-8811558808e1.png",
    date: "Jul, 2020",
    link: "https://github.com/hasnain40247/MssiahServices",
    details: [
      "Designed a products and users database using MongoDB Atlas services.",
      "Implemented Complete login and registration inclusive of conditional validations.",
      "Designed an active blog posting mechanism.",
      "Successfully carried out a test payment gateway using Stripe payment API",
      "Designed the frontend and deployed the site on the web using heroku.",
    ],
  },

  {
    title: "Astray: First Person Exploration Game",
    tags: [
      { skill: "Unity", backcolor: skillcolors.unity, color: "#EEEEEE" },
      { skill: "Blender", backcolor: skillcolors.blender, color: "#EEEEEE" },
      { skill: "C#", backcolor: skillcolors.chash, color: "#393E46" },
    ],
    url: "https://i.imgur.com/kGYTmpQ.png",
    date: "Aug, 2021",
    link: "https://github.com/hasnain40247/Astray",
    details: [
      "Used assets and unity tools to construct a deserted snowy game environment",
      "Added self-voiceovers, copyright free music and sound effects based on scene and environment type",
      "Executed game logic, particle and object physics and more using C# along with cinematic scene post-processing",
      "Designed and modeled basic 3D assets using Blender",
    ],
  },
  {
    title: "Twitter, React-Native Provider Clone",
    tags: [
      {
        skill: "React-Native",
        backcolor: skillcolors.reactnative,
        color: "#393E46",
      },

      {
        skill: "Javascript",
        backcolor: skillcolors.javascript,
        color: "#393E46",
      },
      { skill: "MongoDB", backcolor: skillcolors.mongo, color: "#393E46" },
      { skill: "Ngrok", backcolor: skillcolors.ngrok, color: "#EEEEEE" },

      { skill: "NodeJS", backcolor: skillcolors.node, color: "#393E46" },
      { skill: "ExpressJS", backcolor: skillcolors.express, color: "#EEEEEE" },
    ],
    url: "https://i.imgur.com/cThg5PY.png",
    date: "Aug, 2021",
    link: "https://github.com/hasnain40247/twitterCloneProvider",
    details: [
      "Designed UI based on Twitter with Expo-cli and React native.",
      "Implemented an API using Express.js and NGROK from scratch to handle authentication as well as storage of tweets",
      "Used MongoDB’s flexible documents to add new tweets, user IDs, time and comments.",
    ],
  },
];
