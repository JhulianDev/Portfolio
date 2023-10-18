import { useState } from "react"
import HTML_ICON from "../assets/svg/HTML-icon.svg";
import CSS_ICON from "../assets/svg/CSS-icon.svg";
import JAVASCRIPT_ICON from "../assets/svg/JavaScript-icon.svg";
import REACT_ICON from "../assets/svg/React-icon.svg";
import NODEJS_ICON from "../assets/svg/NodeJs-icon.svg";
import MONGODB_ICON from "../assets/svg/MongoDB-icon.svg";
import EXPRESS_ICON from "../assets/svg/Express-icon.svg";
import MYSQL_ICON from "../assets/svg/MySQL-icon.svg";
import GIT_ICON from "../assets/svg/Git-icon.svg";
import GITHUB_ICON from "../assets/svg/Github-icon.svg";
import STYLEDCOMP_ICON from "../assets/svg/StyledComponents-icon.svg";
import PHOTOSHOP_ICON from "../assets/svg/PhotoShop-icon.svg";
import ILLUSTRATOR_ICON from "../assets/svg/Illustrator-icon.svg";

const stacks = ['Frontend', 'Backend', 'Extras'];
const frontEnd = [{icon: HTML_ICON, title:"HTML5"}, {icon: CSS_ICON, title:"CSS"}, {icon: JAVASCRIPT_ICON, title:"JavaScript"}, {icon: REACT_ICON, title:"React Js"}];
const backEnd = [{icon: NODEJS_ICON, title:"Node Js"}, {icon: EXPRESS_ICON, title:"Express"}, {icon: MONGODB_ICON, title:"MongoDB"}, {icon: MYSQL_ICON, title:"MySQL"}];
const extras = [{icon: GIT_ICON, title:"Git"}, {icon: STYLEDCOMP_ICON, title:"StyledComp"}, {icon: PHOTOSHOP_ICON, title:"Photoshop"}, {icon: ILLUSTRATOR_ICON, title:"Illustrator"}];

const useSkillsHandler = () => {
  const [skills, setSkills] = useState(frontEnd)
  const [stackActive, setStackActive] = useState("Frontend")

  const handleSkills = (stack) => {
    if (stack === "Frontend") {
      setSkills(frontEnd);
      setStackActive("Frontend");
      return;
    }

    if (stack === "Backend") {
      setSkills(backEnd);
      setStackActive("Backend");
      return;
    }

    if (stack === "Extras") {
      setSkills(extras);
      setStackActive("Extras");
      return;
    }
  }

  return { skills, handleSkills, stacks, stackActive }
}

export default useSkillsHandler;