import React from 'react'
import { CSSTransition } from 'react-transition-group';

const HomeCard = ({description, image, imageLeft}) => {
  let descriptionEl = (<div className="description-container">
                         <div className="description">{description}</div>
                       </div>);
  let imageEl = (<img src={image}></img>);
  let content = imageLeft ? [imageEl, descriptionEl] : [descriptionEl, imageEl];
  return (
    <div className={"card-container fade-in"}>
      <div className="home-card">
        <div className="image-description" >
          {content}
        </div>
      </div>
    </div>
  )

}

export default HomeCard;
