export default function ProCard(props) {
  return (
    <div className="proCard">
      <div className="proTitle">
        <a href={props.url} rel="noreferrer" target="_blank">
          {props.name}
        </a>
      </div>
      <img src={props.img} alt={props.name}></img>
    </div>
  );
}
