import React from 'react'
import './App.css';
import Waitlist from './Waitlist.jsx';



class App extends React.Component {

    render () {
      return (
        <div className="App">
          <h3 id="logo">spacebook</h3>
          <header className="App-header">
          <h5>waitlist</h5>
            <div id="main-wrapper"><main>{<Waitlist />}</main></div>
          </header>
        </div>
      );
  }
}

export default App;
