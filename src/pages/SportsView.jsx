import React, {useState} from 'react'
import SportsImage from '../images/soccer2018.jpg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const blogPosts = [
   {
      title: "This is a title.",
      date: "June 23, 2020",
      text: "Blah blah blah blah."
   },
   {
      title: "This is a title.",
      date: "June 23, 2020",
      text: "Blah blah blah blah."
   },
   {
      title: "This is a title.",
      date: "June 23, 2020",
      text: "Blah blah blah blah."
   }
]

function BooleanWidget() {
   const [flip, setflip]= useState(true);
   const example = () => {
      if (flip) {
         return "Yay."
      }
      else {
         return "No."
      }
   }

   return (
      <section>
         <h1>State: {String(flip)}</h1>
         <p> 
            {
               // whatever value JavaScript returns will end up here, but only
               // values may end up here.
               example()
            }
         </p>
         <p>Another example: {Math.sin(0.5 * Math.PI)}</p>
         <p>
            {
               // this can also be abbreviated:
               flip ? null : "Puppy Chow is delicious."
            }
         </p>
         <button onClick={() => setflip(!flip)}>flip</button>
      </section>
   )
}

const SportsView = () => (
   <section id="SportsView">
      <h1>Soccer and More</h1>
      <p>This is my sports page. Here you can see about my soccer team, and you learn    about the sports  I play in school. Meow.</p>
      <div className='Button'>Click here to see my pictures</div>
      <img id="SportsImage" src={SportsImage} />
      {
         blogPosts.map(post => (
            <section>
               <h1>{post.title}</h1>
               <p>{post.text}</p>
            </section>
         ))
      }

      <BooleanWidget />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SportsView
