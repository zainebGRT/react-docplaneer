import React from 'react'
import ItemsForPlatform from './ItemsForPlatform.js'
import ObjectList from './ItemsForPlatform'
const PlatformItem  =()=> {
    return <div>
      <div className="platform-aside">
      <div className="platform">
        <h1>The world's<br/>biggest healthcare platform</h1>
        <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p>
        </div> 
        <img src="https://www.docplanner.com/img/logo.png"/>
          <div className="items-platform">

            <ItemsForPlatform />
       </div>
         </div>
 
    </div>
  } 


export default PlatformItem;