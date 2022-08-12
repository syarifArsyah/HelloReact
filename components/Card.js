import "./card.css";

export const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <div>
          <button onClick={() => console.log(props.id)}>Add</button>
        </div>
      </div>
    </>
  );
};
