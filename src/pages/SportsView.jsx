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
         <button className='Button' onClick={() => setflip(!flip)}>Click here to see my pictures</button>
         <p> 
            {
               // whatever value JavaScript returns will end up here, but only
               // values may end up here.
               example()
            }
         </p>
         <p>
            {
               // this can also be abbreviated:
               flip ? null : <img id="SportsImage" src={SportsImage} />
            }
         </p>
         
      </section>
   )
}

const postMaker = (post) => (
   <section>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
   </section>
)

const SportsView = () => (
   <section id="SportsView">
       
      <h1>Soccer and More</h1>
      <p>This is my sports page. Here you can see about my soccer team, and you learn about the sports  I play in school. </p>


      <BooleanWidget />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SportsView
