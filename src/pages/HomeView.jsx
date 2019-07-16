import React, {useState} from 'react'
import Picture from '../images/example.png'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const HomeView = () => (
   <section>
      <h1>Hi There! Welcome to my website. Here you can check out about me, the 
         sports I like, and my school.</h1>
      <div className='Button'>Click here to see my pictures</div>
      <img id="BottomImage" src={Picture} />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default HomeView
