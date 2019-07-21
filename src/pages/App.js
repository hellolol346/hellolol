import React             from 'react'
import { Route, Switch } from 'react-router-dom'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Views and Components

import TopMenu    from '../components/TopMenu'
import HomeView   from './HomeView'
import AboutView  from './AboutView'
import SchoolView from './SchoolView'
import SportsView from './SportsView'
import TestView   from './TestView' 

import '../css/App.scss'
import '../css/reset.css'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Main App

/*
	Do not change this file... for now.

	 Your website is made of two parts right now, a top menu part and a bottom page
	 underneath. When you click on the menu items the bottom part changes based on
	 where you want to go.

	 1. <TopMenu /> is where your TopMenu is stored.
	 2. <Switch> is the bottom part of your page, and it contains a list of possible
			locations you might want to go. Each <Route> is like a different page or view.
*/

const BottomView = () => (
	<Switch>
		<Route exact path="/" component={HomeView}   />
		<Route path="/about"  component={AboutView}  />
		<Route path="/sports" component={SportsView} />
		<Route path="/school" component={SchoolView} />
		<Route path="/test"   component={TestView} />
	</Switch>
)

const App = () => (
	<div id="App">
		<TopMenu />
		<BottomView />
	</div>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default App
