import React, {useState} from 'react'
import SportsImage from '../images/soccer2018.jpg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Data

const blogPosts = [
    {
       title: "This is a title 1.",
       date: "June 23, 2020",
       text: "Blah blah blah blah."
    },
    {
       title: "This is a title 2.",
       date: "June 23, 2020",
       text: "Blah blah blah blah."
    },
    {
       title: "This is a title 3.",
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
                Otherwise, it is facing up</h1><br />
            <p>The vertex = {vertex}</p><br />
            <p>The first root = {rootone}</p><br />
            <p>The second root = {roottwo}</p><br />
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
        <section id="TestView">
            <h1>A place for experiments.</h1>
            <p>This page has a bunch of random code experiments on it.</p>
            <p>The experiment below is stored in an array. Because of that, I just have
                to type a few words and the outcome will be a lot.I learned this from my 
                instructor Wayne. Just so we  are clear the "this is a title blah blah
                blah" is the array. After that is the next thing.
            </p><br />
            <p>After that we have the quadratic formula. All you need to do 
               is type in a, b,and c and it will give you the vertex and roots. I tried it and it works!
               If you don't know what I am talking about, its fine. You will learn it soon and you will be like
               THIS ACTUALLY WORKS!!! I am really proud of this calculator and I think it is great.
               Maybe I can add in more experiments soon. Be sure to check this out later for new things.</p><br />
            <section className="text">
                {
                    blogPosts.map(postMaker)
                }
            </section>
            <FormWidget />
        </section>
    )
}

export default TestView