import { AiFillGithub, AiFillCodeSandboxCircle } from "react-icons/ai";
import { SiBandlab, SiGoogletranslate } from "react-icons/si";
import React, { useState } from "react";

export default function About() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div id="home">
      <div className="about">
        <div className="title">
          <h1>KTH's Portfolio</h1>
          {!isHidden ? (
            <p>
              Welcome to my portfolio, where I showcase my journey in front-end
              development, my skills, toy projects, and continuous growth. I'm
              passionate about crafting captivating user experiences using HTML,
              CSS, and JavaScript. <br />
              My development journey began by tinkering with small hobby
              projects on platforms like CodePen, where I honed my skills and
              experimented with creative ideas. Guided by a variety of online
              resources, including YouTube, Udemy, and FreeCodeCamp, I immersed
              myself in learning the intricacies of web development. <br />{" "}
              Through dedicated practice and learning, I've learned core
              front-end technologies and concepts. I've become proficient in
              HTML and CSS for crafting stunning and responsive interfaces.
              JavaScript has empowered me to add interactivity and dynamic
              elements to my projects, creating engaging user interactions.{" "}
              <br /> My proficiency extends to React, and I learned about
              components, props, the virtual DOM, and state management.
              Additionally, I've tried Next.js, and using to my first big
              project and it's really fit in. <br />
              I've leveraged CodeSandbox and GitHub to share my results. My
              commitment to learning is unwavering, as I continually seek
              opportunities to enhance my skills and stay updated with the
              ever-evolving front-end landscape. <br /> It's just a simple
              portfolio, you can visit my github and other sites just click
              icons where under the cover letter. And if you click translate
              icon, It changes to korean. .Thank you for visiting!
            </p>
          ) : (
            <p>
              저의 포트폴리오에 오신 것을 환영합니다. 이곳에서 저의 프론트엔드
              개발 여정, 제 기술, 장난감 프로젝트, 그리고 지속적인 성장을
              보여드리고 있습니다. HTML, CSS, 그리고 JavaScript를 활용하여 좋은
              화면을 만들고자 합니다. <br />
              제 개발 여정은 CodePen과 같은 플랫폼에서 작은 취미 프로젝트를
              만들어보며 시작되었습니다. YouTube, Udemy, 그리고 FreeCodeCamp와
              같은 다양한 온라인 자료들을 통해 웹 개발의 복잡한 부분들을
              익혔습니다. HTML과 CSS를 기본으로 익히고 JavaScript를 통해
              프로젝트에 상호작용과 동적인 요소를 추가했습니다. <br /> 이후
              React에 대해 배웠으며, 컴포넌트, 프롭스, 가상 DOM, 그리고 상태
              관리에 대한 개념을 이해하고 활용해 보았습니다. 더불어 Next.js를
              시도해본 경험도 있으며, 이를 통해 첫 프로젝트를 개발하며
              어울리는지 확인하였습니다.
              <br /> 그리고 결과물을 공유하기 위해 CodeSandbox와 GitHub를
              활용하였습니다. 여기서 멈추지 않고 끊임없이 변화하는 프론트엔드의
              시장에 맞춰 새로운 기술들을 인지하고 있습니다.
              <br /> 밑의 아이콘들을 클릭하면 Github을 비롯한 저의 사이트에
              방문하실수 있습니다. 그리고 번역 아이콘을 클릭하면 영어 버전
              자기소개서가 나옵니다. 방문해주셔서 감사합니다!
            </p>
          )}
        </div>
        <ul>
          <li>
            <a
              href="https://github.com/LeaDerBone"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/u/LeaDerBone"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillCodeSandboxCircle />
            </a>
          </li>
          <li>
            <a
              href="https://www.bandlab.com/leaderbone"
              rel="noreferrer"
              target="_blank"
            >
              <SiBandlab />
            </a>
          </li>
          <li>
            <button onClick={toggleVisibility}>
              <SiGoogletranslate />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
