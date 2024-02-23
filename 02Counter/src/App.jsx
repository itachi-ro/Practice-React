import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter,setCounter] = useState(5);

  const addValue = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, 10));
  };

  
  const removeValue = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };
  // const addValue = () => {
  //   Counter = Counter + 1;
  //   if(Counter >= 20){
  //     Counter = 20
  //     setCounter(Counter)
  //   }else{
  //     setCounter(Counter)  
  //   }
  // }

  // const removeValue = () => {
  //   Counter = Counter - 1;  
  //   if(Counter <= 0){
  //     Counter = 0
  //     setCounter(Counter)
  //   }else{
  //     setCounter(Counter) 
  //   }
  // }

  return (
    <>
      <h3>Counter: {Counter}</h3>
      <br />
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
