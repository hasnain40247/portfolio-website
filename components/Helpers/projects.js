import Tag from "../AboutSectionComponents/Tag";
import {skillcolors} from "../Helpers/skillColors"

export const projects = [
  {
    title: "AI Sign Language",
    tags: [
      <Tag skill={"Python"} backcolor={skillcolors.python} />,
      <Tag skill={"OpenCV"} backcolor={skillcolors.opencv} />,
      <Tag skill={"Flask"} backcolor={skillcolors.flask} color={"#EEEEEE"} />,
    ],
    url: "https://user-images.githubusercontent.com/52504037/159111107-6e96d6db-915b-456d-b562-8811558808e1.png",
    date: "Apr, 2021",
    link: "https://github.com/hasnain40247/AISignLanguageTranslation",
    details: [
      <li> Implemented Transfer learning using TensorFlow Model zoo.</li>,
      <li>
        {" "}
        Trained and fine-tuned a Single Shot Detector model using an
        independently created dataset consisting of sign language alphabets and
        phrases.
      </li>,
      <li>
        {" "}
        Implemented the model into a flask application primarily dependent on
        the in-browser OpenCV capability.
      </li>,
    ],
  },
];
