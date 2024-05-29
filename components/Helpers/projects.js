import Tag from "../AboutSectionComponents/Tag";
import { skillcolors } from "../Helpers/skillColors";

export const projects = [
  {
    title: "Shroom: LLM Hallucination Detector",
    tags: [
      { skill: "Python", backcolor: skillcolors.python},
      {
        skill: "Pytorch",
        backcolor: skillcolors.pytorch,
        color: "#EEEEEE" 
      },
      {
        skill: "Transformers",
        backcolor: skillcolors.trans,
        color: "#393E46",
      },
      {
        skill: "Bert",
        backcolor: skillcolors.bert,
        color: "#393E46",
      },
      {
        skill: "HuggingFace",
        backcolor: skillcolors.hf,
        color: "#393E46",
      },
    ],
    url: "https://imgur.com/a/N26oG56",
    date: "March, 2024",
    link: "https://github.com/hasnain40247/SHROOM-llm-hallucination-detector",
    details: [
     "Developed classifiers for hallucinated text using spectral, hierarchical clustering, and semantic similarity metrics.",
     "Designed and evaluated a variety of metric-based feature vector to cluster pairs of text into their true classes.",
     "Implemented a BERT-based Siamese network, achieving a loss of 0.02 across machine translation generations.",
     "Developed a self-eval prompting agent to utilize conistency prompting over a training set to learn and detect hallucinations.",
    ],
  },
  {
    title: "Shaper: GA-based Projectile Evader",
    tags: [
      { skill: "Python", backcolor: skillcolors.python, color: "#EEEEEE" },
      { skill: "Pygame", backcolor: skillcolors.pygame, color: "#EEEEEE" },
      { skill: "Pymunk", backcolor: skillcolors.pymunk, color: "#EEEEEE" },
      { skill: "Numpy", backcolor: skillcolors.vector, color: "#EEEEEE" },
   
    ],
    url: "https://imgur.com/a/bBktJc8",
    date: "Dec, 2023",
    link: "https://github.com/hasnain40247/SHAPER",
    details: [
      "Trained neural networks by replacing back-propagation with genetic algorithm and a variable scoring function.",
      "Developed a system of unique agents with independent neural networks, achieving fitness over 7,200 frames.",
      "Mutated agent populations, enhancing performance by iteratively selecting top-scoring spatial properties."
    ]

  },
  {
    title: "Habit-y, Productivity App",
    tags: [
      { skill: "ReactJS", backcolor: skillcolors.react, color: "#EEEEEE" },
      {
        skill: "ElectronJS",
        backcolor: skillcolors.electron,
        color: "#393E46",
      },
    ],
    url: "https://raw.githubusercontent.com/hasnain40247/habity-productivity-markdown-app/master/public/mark.png",
    date: "Sept, 2022",
    link: "https://github.com/hasnain40247/habity-productivity-markdown-app",
    details: [
     "Created an Electron.JS based desktop application that takes markdown notes as well as tracks an individuals tasks and productivity.",
     "The application uses React's Redux to handle both markdown and tasks and are stored in their respective formatted objects.",
     "The markdown editor uses Slate.JS to give access to the textarea's DOM tree for more customizability which allows features like markdown text highlight, shortcuts, toolbar and more.",
     "The app also takes advantage of custom animations using the framer motion library to give smooth and visually appealing animations."
    ],
  },
  {
    title: "Decentralized Crypto faucet & NFT market",
    demo: "https://d3azs-faaaa-aaaal-abada-cai.ic0.app/",
    tags: [
      {
        skill: "ReactJS",
        backcolor: skillcolors.react,
        color: "#EEEEEE",
      },

      {
        skill: "Javascript",
        backcolor: skillcolors.javascript,
        color: "#393E46",
      },
      { skill: "Motoko", backcolor: skillcolors.motoko, color: "#EEEEEE" },
      { skill: "Dfinity", backcolor: skillcolors.dfinity, color: "#EEEEEE" },
    ],
    url: "https://i.imgur.com/Jvul7AV.png",
    date: "July, 2022",
    link: "https://github.com/hasnain40247/NFT-Market-DApp",
    details: [
      "The front-end was crafted using ReactJS and ThreeJS for animations and models. The decentralization was achived using Dfinity.",
      "Canisters, were created using motoko which are essentially blobs that consist of smart-contracts. These canisters were hosted on the simulated ICP blockchain by using up cycles.",
      "Each minted NFT is a canister hosted on the blockchain with transaction information attached to it. Whereas the crypto faucet is one single authorised canister consisting of 1,00,000 tokens out of which 10,000 can be claimed.",
      "The NFT-market although hosted on the ICP blockchain remains unfunctional because of high cycles requirements.",
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
    date: "Jan, 2022",
    link: "https://github.com/hasnain40247/twitterCloneProvider",
    details: [
      "Designed UI based on Twitter with Expo-cli and React native.",
      "Implemented an API using Express.js and NGROK from scratch to handle authentication as well as storage of tweets",
      "Used MongoDB’s flexible documents to add new tweets, user IDs, time and comments.",
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
    date: "Jan, 2022",
    link: "https://github.com/HackclubVIT/naari_Android",
    details: [
      "Led and collaborated with a team of 3, organized meetings and delegated tasks.,",
      "Designed UI from scratch based on several figma mockups crafted by the design team",
      "Implemented Email and Google authentication using firebase. Added firebase cloud firestore functionality to store user settings and data.",
      "Enforced an in-app podcast player with full fledged MP3 controls.",
    ],
  },
  {
    title: "Astray: First Person Exploration Game",
    tags: [
      { skill: "Unity", backcolor: skillcolors.unity, color: "#EEEEEE" },
      { skill: "Blender", backcolor: skillcolors.blender, color: "#EEEEEE" },
      { skill: "C#", backcolor: skillcolors.chash, color: "#393E46" },
    ],
    demo: "https://hasnain40247.itch.io/astray",
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
];
