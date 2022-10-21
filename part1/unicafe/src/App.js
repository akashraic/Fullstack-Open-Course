import { useState } from 'react'

const Display = ({ text,value }) => (
  <p>{text}: {value}</p>
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

  const handleGood = () => (
    setGood(good + 1)
  )

  const handleNeutral = () => (
    setNeutral(neutral + 1)
  )

  const handleBad = () => (
    setBad(bad + 1)
  )
  

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
        <Display text='good' value={good}/>
        <Display text='neutral' value={neutral}/>
        <Display text='bad' value={bad}/>
      </div>

    </div>
  )
}

export default App