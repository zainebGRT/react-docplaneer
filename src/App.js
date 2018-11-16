import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import HealthCare from './HealthCare.js';
import Cards from './Cards.js';
import MainList from './MainList.js';
import PlatformItem from'./PlatformItem.js'
import PlatformQuotes from './PlatformQuotes.js'
import PlacesCards from './PlacesCards.js'
import Footer from './Footer'
class App extends Component {
  render() {
    return <div>
      <Header/>
      <HealthCare/>
      <div className="cards">
        <Cards/>
      </div>
      <MainList/>
      <div className='platform-item'>
      <PlatformItem/>
      </div>
      <PlatformQuotes/>
      <PlacesCards/>
      <Footer/>
    </div>
    
  }
}
export default App;
