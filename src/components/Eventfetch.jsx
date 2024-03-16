import React from 'react'

const Eventfetch = () => {
    const Clickhandle = () =>{
        console.log("you clicked me")
    }
    const dbClickhandle = (name) =>{
        alert("Hello" + " " + name)
    }
    const Onchangehandle = (name) =>{
        alert("you typed in the text field")
    }
    const Mousehandle = (name) =>{
        alert("you mouse over the element")
    }
  return (
    <div>
        <button onClick={Clickhandle}> Click me</button>
        <h1 onDoubleClick= {() => dbClickhandle ("Nish")}>Double Click</h1>
        <input onChange={Onchangehandle} type='text' />
        <h1 onMouseOver={Mousehandle}>Mouse over</h1>
    </div>
  )
}

export default Eventfetch