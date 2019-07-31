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
      <p>So while we were making the button for this we made it in a way that it shows
         a picture, it changes the "YAY" to "No", and it changes from State: true ot State:
         false. This happened because this was meant to be a test button, but we decided to
         use the button to show a picture. Anyway, the outcome of the button is awesome.
         See for yourself. Now let's talk abotu sports. I love soccer and I play for a club
         called De Anza Force. We are really good. In the picture we were second place in the 
         District cup. Our team has won a tournament in LA and in Lake Tahoe. Now, for basketball
         I play for fun, but I am decent at it and I love it!. The top 6 people at my elementry 
         school for basketball was Ethan, Jonathon, Issac, Mitul, Nathan, and me. This isn't ranked
         from best to worst, it is just the top 6. In middle school basketball will be much harder due to the competiton.
         It doesn't matter because I like to watch and play basketball. That is it for now but I will tell
         you other things because we have a few tournaments coming up. :)


         </p>
         <br />
      <BooleanWidget />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SportsView
