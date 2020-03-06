import React from "react";

const Card = props => {
  console.log(props)

  return (
    <div key={Date.now() * Math.random()} className="card is-child">
      <span className="tag is-danger ">{props.joke.type}</span>

      <p className="setup">{props.joke.setup}</p>
      <p className="punchline">{props.joke.punchline}</p>
    </div>
  );
}
export default Card
