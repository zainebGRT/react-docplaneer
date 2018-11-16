import React from 'react'

const list = ["ZnanyLekarz","Doctorilia","MioDottore","DoctorTakvimi","ZnamyLekar"]


const Logos =()=>{
    return <div className='flex-block'>
        {list.map((element,i)=>
        <div className='logo-block'>
        <a href="#" className="logos">
        <img src="https://www.docplanner.com/img/sygnet.png"/>
        <div className="logo-element">
        {element}
        </div>
        </a>
        </div>
        )}
    </div>
}
export default Logos