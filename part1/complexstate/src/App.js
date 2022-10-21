import { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the button
      </div>
    )
  } 
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const hello = (who) => () => console.log('hello',who)
   


/*  Never mutate the state, for string, don't use push
    Can't call useState from inside a loop, conditional or non-function defining component
    */
const App = () => {
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])


const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left+1)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right+1)
}

return (
  <div>
    {left}
    <Button handleClick={handleLeftClick} text='left' />
    <Button handleClick={handleRightClick} text='right'/>
    <button onClick={hello('you')}>hello</button>
    {right}
    <History allClicks={allClicks} />
  </div>
  )
}

export default App;
