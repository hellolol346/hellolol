import React, { useState } from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const Widget = () => {
   const [count, setCount] = useState(0);
   const [flip, setflip]= useState(true);

   return (
      <section>
         <h1>{count}</h1>
         <h1>{String(flip)}</h1>
         <button onClick={() => setflip(!flip)}>flip</button>
         <button onClick={() => setCount(count + 1)} className='Button'>up</button>
         <button onClick={() => setCount(count - 1)} className='Button'>down</button>
      </section>
   )
}

const FormWidget = () => {
   const [a, seta] = useState('');
   const [b, setb] = useState('');
   const [c, setc] = useState('');
   const vertex = -b/ 2*a
   const rootone = (-b + ((b**2 - 4*a*c)**0.5)) / (2*a)
   const roottwo = (-b - ((b**2 - 4*a*c)**0.5)) / (2*a)

   return (
      <section>
         <h1>{a}</h1>
         <h1>{b}</h1>
         <h1>{c}</h1>
         <form>
            <input value={a} onChange={(event) => seta(event.target.value)}></input>
            <input value={b} onChange={(e) => setb(e.target.value) }></input>
            <input value={c} onChange={(e) => setc(e.target.value) }></input>
            </form>
            <h1>If you type a negetive number in the place of "a" then the parabola is facing down. 
               Otherwise, it is facing up</h1>
               <p> The vertex= {vertex}</p>
               <p> The first root= {rootone}</p>
               <p> The second root= {roottwo}</p>
      </section>
   )
}

const AboutView = () => (
   <section>
      <h1>This is the About Page. Here you can learn about me and what I like. </h1>
      <p>So I really like to play soccer and basketball at school. I play for a soccer
         team and I just play basketball for fun. You can learn a bit more about that
         in the sports page. Anyway, my favorite subject is math. I learn a lot of more
         complicated math with other classes. It is just so interesting to do formulas
         and learn new things. As a matter of fact I made a quadratic formula calculator
         on the test page. Go and see it for yourself. My favorite food is chicken caeser salad.
         I love having croutons, lettuce, and chicken together. It just is a really 
         good taste. Sadly, that is all I can do for now, but I will add more later. :)

      </p>
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default AboutView
