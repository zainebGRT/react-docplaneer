import React from 'react';

class Select extends React.Component {
    render(){
    return <div>
  <select  className ="contries-option">
        <option value ="CHOOSE CONTRY">CHOOSE CONTRY</option>
        <option value="ARGENTINA">ARGENTINA</option>
        <option value="AUSTRALIA">AUSTRALIA</option>
        <option value="BRAZILZ">BRAZILZ</option>
        <option value ="CHILE">CHILE</option>
        <option value="COLOMBIA">COLOMBIA</option>
        <option value="CZECH">CZECH</option>
        <option>FRANCE</option>
        <option>ITALIE</option>
        <option>TUNISIE</option>
        </select>
    </div>
    }
}
export default Select