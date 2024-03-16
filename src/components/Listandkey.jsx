import React, { useState } from 'react'


//    --------list------------  

// const Listandkey = () => {
//   const persons = [
//     {
//       id:1,
//       name:"nishad",
//       age:22,
//     },
//     {
//       id:2,
//       name:"muhd",
//       age:33
//     }
//   ]
//   const personlist =persons.map ((person)=>
//   <h2>I am {person.name}, I am {person.age} years old </h2>)
//   return (
//     <div>{personlist}</div>
//   )
// }


// ------------key----------


const Listandkey = () => {
  const strings = ["Hy I am nishad", "Hello", "Whats up"];

  return (
    <div>
      <ul>
        {strings.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Listandkey