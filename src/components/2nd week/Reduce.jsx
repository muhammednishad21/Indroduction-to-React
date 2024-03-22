import React, { useReducer } from 'react'

let initalState = 0

const reducer = (state = initalState , action) =>{
    switch (action) {
        case "increment":           
            return state = state + 1;
    
        case "decrement":
            return state = state - 1;
        
        case "reset":
            return state = 0

        default :
             return state
    }

}

const Reduce = () => {
 const [count , dispatch] = useReducer(reducer , initalState)
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Reduce