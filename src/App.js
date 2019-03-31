import React, { Component } from 'react';
import './App.css';
import './Button.js';

class App extends Component {
  render() {
    return (
      <div id="App">
        <nav id="TopMenu">
          <div className='MenuItem'><a href='#'>Home</a></div>
          <div className='MenuItem'><a href='#'>About me</a></div>
          <div className='MenuItem'><a href='#'>Sports</a></div>
          <div className='MenuItem'><a href='#'>School</a></div>
        </nav>
        <section>
          <h1>Hi There! Welcome to my website.
             Here you can check out about me, the sports I like,
              and my school.</h1>
        </section>
        <section>
          <div className='Button'>Click here to see my pictures</div>
        </section>
        <img href='' />
      </div>
    );
  }
}

export default App;
