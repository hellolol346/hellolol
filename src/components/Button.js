import React from 'react'

const randomJSFunction = () => console.log("meow")

const Button = ({ name }) => (
    <div className='Button' onClick={randomJSFunction}>{name}</div>
)

export default Button