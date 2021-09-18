import React from 'react'
import './App.css';
import './Waitlist.css';
import Waitlist from './Waitlist.jsx';



class App extends React.Component {

    rainbow_word () {
        document.querySelectorAll("code").forEach((word) => {
            var i = word.innerText.length - 1
            while (i >= 0) {
                console.log(word.innerText[i])
                i = i - 1
            }
        })
    }

    componentDidMount() {
        this.rainbow_word()
    }

    render () {
      return (
        <div className="App">
              <h3 id="logo">spacebook</h3>
          <header className="App-header">
            <p className="rainbow"><code>waitlist</code></p>
            <body>
              {<Waitlist />}
            </body>
          </header>
        </div>
      );
  }
}

export default App;
