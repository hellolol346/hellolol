import React, {useState} from 'react'
import SportsImage from '../images/soccer2018.jpg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Data

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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Components

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
            <p>Another example: {Math.sin(0.5 * Math.PI)}</p>
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
 

function TestView() {
    return (
        <section id="testView">
            <h1>A place for experiments.</h1>
            <p>This page has a bunch of random code experiments on it.</p>
            {
                blogPosts.map(postMaker)
            }
            <FormWidget />
        </section>
    )
}

export default TestView