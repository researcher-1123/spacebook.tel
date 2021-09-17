import React from 'react'
import './Waitlist.css'


class Waitlist extends React.Component {

  state = {
    number: '' 
  }

  render() {
    return (
    <div id="waitlist-wrapper">
      <input type="tel" onChange={(e) => this.setState({number: e.target.value})} placeholder="+1  (267) 730 1738" id="waitlist-input" />
      <button type="submit" name="submit"  id="submit">Waitlist</button>
        <code>
            
        </code>
    </div>
  )}
  
}

export default Waitlist
