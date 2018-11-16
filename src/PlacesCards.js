import React from 'react'
import Button from './Button.js';
const Card_s = [
  { image: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw" },
  { image: "https://www.docplanner.com/images/barcelona.png", title: "Barcelona" },
  { image: "https://www.docplanner.com/images/istanbul.png", title: "Istanbul" },
  { image: "https://www.docplanner.com/images/rome.png", title: "Rome" },
  { image: "https://www.docplanner.com/images/mexico-city.png", title: "Mexico City" },
  { image: "https://www.docplanner.com/images/curitiba.png", title: "Curtibia" }
]




const PlaceCard = (props) =>{
 return <div className="places-card">
    <img src={props.card.image} />
    <div className='under-image'>
    <h3>{props.card.title} </h3>
    <Button/>
    </div>
   </div>

}
const Cards = (props) =>
  props.CardList.map((ele, i) => {
    return <div key={i}>
      <PlaceCard card={ele} />
    </div>
  })
const PlacesCards = () =>
  <div className='places'>
   < Cards CardList = {Card_s}/>
  </div>

export default PlacesCards;