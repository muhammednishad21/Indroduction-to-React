import React, {useEffect, useState} from 'react'

const Useeffect = () => {
    const [count, setcount] = useState(0)
    const [name, setname] = useState("First")

    const Increment = () =>{
        setcount (count+1)
    }
    const Changename = () =>{
       setname(name==="First"? "Second" : "First")
    }

    useEffect (()=>{
      console.log("Use effect");
    },[name])

  return (
    <div>
       {count} <button onClick={Increment}>Increment</button>
        {name} <button onClick={Changename}>Change Name</button>
    </div>
  )
}

export default Useeffect