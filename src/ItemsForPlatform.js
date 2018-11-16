import React from 'react'
const ObjectList = [{
    image:"https://www.docplanner.com/img/flag.png",
    title:"Leader in 10 countries",
    paragraph: ' Colombia Argentina and Chile'
},

    {
        image:"https://www.docplanner.com/img/visits.png",
        title:"1 million appointments",
        paragraph:"booked last month"
    },
    {
        image:"https://www.docplanner.com/img/patients.png",
        title:"30 million unique patients",
        paragraph:"visit us every month"
    },
    {
        image:"https://www.docplanner.com/img/doctors.png",
        title:"2 million active doctors",
        paragraph:"trust  in our  solutions"
    }
]

const ItemForPlatform = props => 
       <div className='block-item'>
         <img src ={props.item.image}/>
         <h2>{props.item.title}</h2>
         <p>{props.item.paragraph}</p>
    </div>
    
const Items = (props) =>
    props.TheObjects.map((el, i) =>{
return <div key = {i}>
<ItemForPlatform item = {el}/>
</div>
    })
    const ItemsForPlatform =()=>
    <Items TheObjects = {ObjectList}/>


export default ItemsForPlatform;