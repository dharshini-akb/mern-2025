import React,{useState}from 'react'
const State=() => {
    const [count,setCount]=useState(0);
    const increment = ()=>
    {
      setCount(count+1)
    }

  return (
    <>
    <div>state</div>
    <button onClick ={increment}>+</button>
<h1>{count}</h1>
</>
    
  )
}

export default State