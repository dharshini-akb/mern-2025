import React from 'react'
import Child from './component/Child'
import Abouts from './pages/Abouts'
import Home from './pages/Home'
import Counter from './pages/Counter'





const App = () => {
  var month =["January","Februray","March","April","May","June","July","August","September","October","November","December"];
  var users={username: "dharshini",password: "7979"}
  return (
    <div>
        <Child name="dharshu"phno="1234567890" dept="IT"/>
         <Child name="dharshini" phno="1212121212"dept="CSE"/>
         <Home items ={month} users={users}/>
        
      <Counter/>
        <Abouts/>
   
        

    </div>
  )
}

export default App