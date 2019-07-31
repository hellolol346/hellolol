import React, {useState} from 'react'
import Picture from '../images/example.png'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const HomeView = () => (
   <section>
      <h1>Hi There! Welcome to my website. Here you can check out about me, the 
         sports I like, and my school. So this website is a work in progress and I am 
         just about to enter middle school, so there might be a few wierd things it.
         P.S. I got some help from my coding claas teacher Wayne Liu.</h1>
      
      <br />
      <p>So I didn't get to add any real pictures of me due tot he fact that I just got 
         this laptop. Thus, I don't have any pictures downloaded. This buton also doesn't work
         because like I said this is a work in progress.
      </p>
      <br />
      <p>You should try clicking on the button. It adds a really cool affect that 
         I made.
      </p>
      <div className='Button'>Click here to see my pictures</div>
      <img id="BottomImage" src={Picture} />
      
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default HomeView
