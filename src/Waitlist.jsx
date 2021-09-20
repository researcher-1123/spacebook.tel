import React from 'react'
import './Waitlist.css'


class Waitlist extends React.Component {

  state = {
    number: '' 
  }

  add (e) {
    e.preventDefault()
    alert(this.state.number)
  }

  render() {
    return (
    <div>
    <form onSubmit={(e) => this.add(e)} >
      <input type="email" onChange={(e) => this.setState({number: e.target.value})} placeholder="tim@gmail.com" id="waitlist-input" required />
      <button type="submit" name="submit"  id="submit">🚀</button>
    </form>
    </div>
  )}
  
}

export default Waitlist
