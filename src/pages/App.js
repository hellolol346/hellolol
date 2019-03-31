import React             from 'react'
import { Route, Switch } from 'react-router-dom'

import TopMenu    from '../components/TopMenu'
import HomeView   from '../pages/HomeView'
import AboutView  from '../pages/AboutView'
import SchoolView from '../pages/SchoolView'
import SportsView from '../pages/SportsView'

import '../css/App.css'
import '../css/reset.css'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Main App

const App = () => (
  <div id="App">
    <TopMenu />
    <Switch>
        <Route exact path="/" component={HomeView}   />
        <Route path="/about"  component={AboutView}  />
        <Route path="/sports" component={SportsView} />
        <Route path="/school" component={SchoolView} />
      </Switch>
  </div>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default App;
