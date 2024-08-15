import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { AccordionDemo } from './components/demo/AccordionDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px=20'>
        <Button>Testing</Button>
        <AccordionDemo></AccordionDemo>
      </div>
    </>
  )
}

export default App
