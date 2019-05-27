import React from 'react'
import Example from '../images/school-example.jpg'


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const logToConsole = () => console.log(3 + 4)

const Clickable = ({ title }) => (
   <button id="Clickable">{title}</button>
)

const SchoolView = () => (
   <section id="SchoolView">
      <p>This is the School page. Here you can learn about what I do in school and what happens 
         in my classroom.</p>
      <img src={Example} />
      <br />
      <Clickable title="mnoomix" />
      <button onClick={logToConsole}>Test Button</button>
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SchoolView
