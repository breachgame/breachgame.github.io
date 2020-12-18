import React from 'react'

const HomeCard = ({description, image, imageLeft}) => {
  if (imageLeft) {
    return (
      <div className={"card-container"}>
        <div className="home-card">
            <div className="image-description" >
              <img src={image}></img>
              <div className="description-container">
                <div className="description">{description}</div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  return (
    <div className={"card-container"}>
      <div className="home-card">
          <div className="image-description" >
          <div className="description-container">
            <div className="description">{description}</div>
          </div>
            <img src={image}></img>
          </div>
        </div>
      </div>
  )
}

export default HomeCard;
