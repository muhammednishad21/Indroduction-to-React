import React, { useState } from 'react'

const Rev = () => {
    const [data , setData] = useState("")

    const handleChange =(e)=>{
        setData(data)
        console.log(e.target.value)
    }


  return (
    <div>
        <h1>data</h1>
        <input type='text' onChange={(e) => handleChange (e)}/>
        <button>Click</button>
    </div>
  )
}

export default Rev