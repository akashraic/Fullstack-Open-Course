import { useState } from 'react'

const StatisticLine = ({ text,value,symbol }) => (
  <tr>
    <td>{text}:</td> <td> {value} {symbol}</td>
  </tr>
  
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.good || props.bad || props.neutral) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text='good' value={props.good}/>
            <StatisticLine text='neutral' value={props.neutral}/>
            <StatisticLine text='bad' value={props.bad}/>
            <StatisticLine text='average' value={props.avg/props.all}/>
            <StatisticLine text='positive' value={(props.good/props.all)*100} symbol={'%'}/>
          </tbody>
          </table>
        </div>
    )
  }
  else {
    return <p>No Feedback Given</p>
  }
}

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
        <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg}/>
      </div>
    </div>
  )
}

export default App