import { useState } from 'react'

const Display = ({ text,value,symbol }) => (
  <p>{text}: {value} {symbol}</p>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood = () => {
    setAll(all+1)
    setGood(good + 1)
    setAvg(avg+1)
  }

  const handleNeutral = () => {
    setAll(all+1)
    setNeutral(neutral + 1)
    setAvg(avg+0)
  }

  const handleBad = () => {
    setAll(all+1)
    setBad(bad + 1)
    setAvg(avg-1)
  }
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
      </div>
      <h1>Statistics</h1>
      <div>
        <Display text='good' value={good} symbol={' '}/>
        <Display text='neutral' value={neutral} symbol={' '}/>
        <Display text='bad' value={bad} symbol={' '}/>
        <Display text='all' value={all} symbol={' '}/>
        <Display text='average' value={avg/all} symbol={' '}/>
        <Display text='positive' value={(good/all)*100} symbol={'%'}/>

      </div>
    </div>
  )
}

export default App