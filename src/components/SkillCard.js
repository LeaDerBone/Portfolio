export default function SkillCard(props) {
  return (
    <div className="skillCard">
      <div className="skillCon">
        <img src={props.img} alt={props.name}></img>
        <div className="skillTitle">
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  );
}
