import React from 'react';

const Header = () => {
    return (
    <div>
     <div className="header">
       <a href="#">
         <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
       </a>
        <ul class="header-menu">
            <li class="about-us"><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li  className="droplist"><a href="#">Departement</a>
             <div className="dropdown">
              <li ><a href="#">Marketing</a> </li>
                <li> <a href="#">customer</a></li>
                  <li> <a href="#">it</a></li>
                 </div>
            </li>
        </ul>
    </div>
  </div>
         );
}



export default Header;
