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
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   return (
      <section>
         <h1>{firstName}</h1>
         <h1>{lastName}</h1>
         <form>
            <input value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
            <input value={lastName} onChange={(e) => setLastName(e.target.value) }></input>
         </form>
      </section>
   )
}

const AboutView = () => (
   <section>
      <h1>This is the About Page. Here you can learn about me and what I like. </h1>

   <Widget />
   <FormWidget />
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default AboutView
