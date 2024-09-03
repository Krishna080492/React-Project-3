import { useState } from 'react'
import './App.css'

function App() {

  let [status, setStatus] = useState(true);

  let clickEvent = (e) => {
    e.target.style.fontSize = "60px";
    e.target.style.fontStyle = "italic";
    e.target.style.color = "#fd49ff";
  }

  return (
    <>
      <h1>Event Handling</h1>
      <div className='box'>
        <button onClick={() => setStatus(false)} >Hide</button>
        <button onClick={() => setStatus(true)} >Show</button>
        <button onClick={() => setStatus(!status)} >Toggle</button>

        {status ? <h2 className='heading' onClick={(e) => clickEvent(e)}>Click Here To Change</h2> : null}
      </div>
    </>
  )
}

export default App
