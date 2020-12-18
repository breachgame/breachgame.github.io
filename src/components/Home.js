import React from 'react';
import Enemy from '../assets/images/enemy_3.gif'
import Door from '../assets/images/door-variation.png'
import Key from '../assets/images/key.png'
import Seasons from '../assets/images/fourseasons.png'
import '../css/home.css'
import HomeCard from './HomeCard'

const cards = [
  {
    image: Enemy,
    description: "Trapped in a garden with an ominous dark figure at your heels, you are on a perilous mission to break free.",
    imageLeft: true
  },
  {
    image: Door,
    description: "A series of mysterious doors are scattered throughout the garden, but the keys to unlock them are guarded by traps and vile things, set up by your antlered foe.",
    imageLeft: false
  },
  {
    image: Seasons,
    description: "Without a weapon or a shield, you have to face the challenges with your one, odd talent alone: your power to change the seasons.",
    imageLeft: true
  }

]

const Home = () => {
  return(
    <div>
      <div className="container">
      {cards.map(card => <HomeCard image={card.image} description={card.description} imageLeft={card.imageLeft} />)}
      </div>
    </div>
  )
}

export default Home;
