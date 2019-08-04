import React, {useState} from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const root = (guess, target) => {
   return 0.5 * (guess + target/guess)
}

function RootWidget() {
   const [guess, setGuess] = useState(2)
   const [target, setTarget] = useState(2)

   return (
      <section id="RootWidget">
         <h1>Current guess: {guess}</h1>
         <h1>Square of Guess: {guess**2}</h1>
         <form>
            <label>Guess:</label>
            <input value={guess} onChange={e => setGuess(e.target.value)} />

            <label>Target:</label>
            <input value={target} onChange={e => setTarget(e.target.value)} />
         </form>

         <button className='Button' onClick={() => { setGuess(root(guess, target)) }}>Next</button>
      </section>
   )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export 

export default RootWidget