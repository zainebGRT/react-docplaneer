import React from 'react';
import Select from './Select';


const cardForPatients = {
    titre:'For patients',
    soustitre:'Find a doctor, book a visit and solve any health-related doubt',
    image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    bgColor: '#00CCB1',

}
const cardForDoctors = {
    titre:"for the doctors",
    soustitre:'Save time  managing visits and cut no-shows by half',
    image:"https://www.docplanner.com/img/screen-saas@2x.png",
    bgColor: '#3D83DF',
   
}


const Card = ({card: {bgColor, titre, soustitre, image,select}}) => {
    return (
        <div
            className="card"
            style={{backgroundColor: bgColor}}
            >
            <h4 className="card-title">
                {titre}
            </h4>
            <h1 className="card-subtitle">
                {soustitre}
            </h1>
            <img src ={image}/>
           
        </div>
    )
}
const Cards = () => {
    return <div className="the-cards">
        <Card card={cardForPatients} />
        <Select/>
        <Card card={cardForDoctors } />
        
    </div>
    
}


export default Cards ;
