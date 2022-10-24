import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const TotalVotes = ({ value }) => (
  <div>
    <p>has {value} votes</p>
  </div>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(Array(anecdotes.length-1).fill(0))
  const maxVote = Math.max(...points)
  const maxVoteInd = points.indexOf(maxVote)

  const pointsTotaller = (p) => {
    p = [...points]
    p[selected] += 1
    setPoints(p)
  }

  const randomAnecdote = (min, max) => {
    min = 0
    max = anecdotes.length-1
    const random = Math.floor(Math.random() * (max-min))
    setSelected(random)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <TotalVotes value={points[selected]}/>
      <div>
        <Button handleClick={randomAnecdote} text='next anecdote' />
        <Button handleClick={pointsTotaller} text='Vote' />
      </div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[maxVoteInd]}
    </div>
  )
}

export default App