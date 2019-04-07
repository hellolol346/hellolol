import React from 'react'
import SportsImage from '../images/soccer2018.jpg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const SportsView = () => (
   <section id="SportsView">
      <h1>Soccer and More</h1 >
      <p> This is my sports page. Here you can see about my soccer team, and you 
         learn about the sports  I play in school.</p>
      <div className='Button'>Click here to see my pictures</div>
      <img id="SportsImage" src={SportsImage} />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SportsView
