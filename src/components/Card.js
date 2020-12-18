import React from 'react';

const Card = ({image, name, tasklist}) => {
  const listItems = tasklist.map(x => <li>{x}</li>)
  return (
    <div className="team-card">
      <img src={image} className="card-image"></img>
      <div className="team-member">{name}</div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Card;
