import React, { useState } from 'react'


//        -----------USESTATE------------

// const Hook = () => {
//     const [name,setname]=useState ("first value")

//     const change =()=>{
//         setname ("second value")
//     }

//   return (
//     <>
//     <h1>{name}</h1>
//     <button onClick={change}>click</button>
//     </>
//   )
// }

// --------number counting--------

// const Hook = () => {
//     const [count , setcount] = useState(0)

//     const counting = ()=> {
//         setcount (count + 1)
//     }
//     const countless = ()=> {
//         setcount (count - 1)
//     }

//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={counting}>Increment</button>
//         <button onClick={countless}>Decrement</button>
//         </>
//     )
// }


// --------show --------

// const Hook = () => {
//     const [count , setcount] = useState(0)
//     const [show, setshow] = useState(false)

//     const counting = ()=> {
//         setcount (count + 1)
//     };
//     const countless = ()=> {
//         setcount (count - 1)
//     };
//     const handleclick = () => {
//         setshow(!show)

//     };

//     return (
//         <div>
//             {
//             show ? (
//             <>
//             <h1>{count}</h1>
//             <button onClick={counting}>Increment</button>
//             <button onClick={countless}>Decrement</button>
//             </>

//             ) : (
//             <></>

//             )}

//             <button onClick={handleclick}>{show ? 'Hide' : 'Show'}</button>

// </div>
// );
// };



// const Hook = () => {
//     const [color, setColor] = useState ("black")

//     const changeColor = () => {
//         if (color === "black") {
//             setColor("blue");
//         } else if (color === "blue") {
//             setColor("red");
//         } else if(color === "red"){
//             setColor("green");
//         }else{
//             setColor("black")
//         }
//     };

//     return (
//         <>
//         <h1>{color}</h1>
//         <button onClick={changeColor}>Click</button>
//         </>
//     )
// }

// const Hook = () => {
//     const [backgroundclr , setbackgroundclr] = useState (true)

//     const changebaground = () =>{
//         setbackgroundclr (!backgroundclr)
//     }

//     return (
//         <>
//         <h1 style={{backgroundColor: backgroundclr ? 'green' : 'red'}}>Background color</h1>
//         <button onClick={changebaground}>Click</button>
//         </>
//     )
// }

const Hook = () =>{
    const [background , setBackground] = useState (true)

    const changeBack = () =>{
        setBackground (!background)
    }


    return(
        <>
        <h1 style={{background : background? "blue" :"red"}}>nish</h1>
        <button onClick={changeBack}>CLICK</button>
        </>
    )
}


export default Hook