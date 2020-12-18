import React from 'react';
import Christina from '../assets/images/christina.png'
import Johan from '../assets/images/johan.jpeg'
import Julien from '../assets/images/julien.png'
import Pepi from '../assets/images/pepi.jpeg'
import Ying from '../assets/images/ying.png'
import '../css/team.css'
import Card from './Card'

const team = [
  {
    name: "Christina Sonebo",
    tasks: ["Concept Art", "Level Design", "Website"],
    image: Christina,
  },
  {
    name: "Johan Wieslander",
    tasks: ["Programmer"],
    image: Johan,
  },
  {
    name: "Julien Reboul",
    tasks: ["Programmer"],
    image: Julien,
  },
  {
    name: "Pepi Nedkova",
    tasks: ["UX", "Level Design"],
    image: Pepi,
  },
  {
    name: "Ying He",
    tasks: ["Business Plan", "Level Design"],
    image: Ying,
  }
]

const Team = () => {
  return(
    <React.Fragment>
    <div className="container">
      <div className="page-title">The Team</div>
      <div className="team-container">
      {team.map(member => <Card image={member.image} name={member.name} tasklist={member.tasks}/>)}
      </div>
    </div>
    </React.Fragment>
  )
}

export default Team;
