import React, { useEffect, useState } from 'react'

const Qn = () => {
    const [data, setData] = useState()

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))


      },[])

      var val = 10

      return (

        data.map((ele,ind)=>{
            if(ind<val){
                return <p>{ele.title}</p>
            }
        })
      )
    }  
  

export default Qn