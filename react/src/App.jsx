import React from 'react';
import Child from './components/Child';
import About from './pages/About';
import Homee from './pages/Homee';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import FormPage from './pages/FormPage';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Hooks from './pages/Hooks';
import State from './Hooks/State';
import Effect from './Hooks/Effect.jsx';
import Effect2 from './Hooks/Effect2.jsx';
import Ref from './Hooks/Ref.jsx';
import Reducer from './Hooks/Reducer.jsx';


import { Route,Routes } from 'react-router-dom';

const App = () => {
  var month = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var users = { username: "dharshu", password: "7979" };

  return (
    <div>
      {/* Uncomment these to see them in action */}
      {/* <Counter/>
      <Child name="dharshu" phno="1234567890" dept="IT" />
      <Child name="dharshini" phno="1212121212" dept="CSE" />
      <FormPage />
      <About />
      <Contact />
      <Skills /> */}
      
      <Navbar />

      <Routes>
        <Route path='/homee' element={<Homee items={month} users={users} />} />
        <Route path='/about' element={<About/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/hooks' element={<Hooks/>}/>
          <Route path='/State' element={<State/>}/>
          <Route path='/Effect' element={<Effect/>}/>
          <Route path='/Effect2' element={<Effect2/>}/>
          <Route path='/Ref' element={<Ref/>}/>
          <Route path='/Reducer' element={<Reducer/>}/>
          
      </Routes>
    </div>
  );
};

export default App;