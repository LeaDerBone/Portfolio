import resume from "../assets/Resume.pdf";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navcon">
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href={resume} rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
