import SkillCard from "./SkillCard";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html.svg";
import typescript from "../assets/typescript.svg";
import css from "../assets/css-3.svg";
import nextjs from "../assets/nextjs.svg";
import jquery from "../assets/jquery-4.svg";

export default function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skillsCon">
        <SkillCard name="javascript" img={javascript} />
        <SkillCard name="react" img={react} />
        <SkillCard name="html" img={html} />
        <SkillCard name="css" img={css} />
        <SkillCard name="tailwind css" img={tailwind} />
        <SkillCard name="typescript" img={typescript} />
        <SkillCard name="next js" img={nextjs} />
        <SkillCard name="jqeury" img={jquery} />
      </div>
    </div>
  );
}
