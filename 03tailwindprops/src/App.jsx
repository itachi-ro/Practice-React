import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    useranme: 'rohan',
    age: 25
  }
  return (
    <>
      <h1 className='bg-pink-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="Radhe" btnText="Visit Me" />
      <Card username="Krishna" btnText="More" />
    </>
  )
}

export default App;
