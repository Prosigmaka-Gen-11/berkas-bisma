import { useState } from "react"
import axios from "axios"



export default function App() {
  const [setup, setSetup] = useState('')
  const [punchline, setPunchline] = useState('')
  const [change, setChange] = useState(false)

  async function asyncAwait() {
    const jokes = await axios.get('https://official-joke-api.appspot.com/random_joke')

    setSetup(jokes.data.setup)
    setPunchline(jokes.data.punchline)
    setChange(true)
  }

  function thenCatch() {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(function(result) {
        setSetup(result.data.setup)
        setPunchline(result.data.punchline)
        setChange(true)
      })
      .catch((err) => {
        alert('Something wrong\n' + err)
      })
  }

  function removeText() {
    setChange(false)
  }

  return <>
    <h1>React API Call Excercise</h1>
    <p>Source: <a href="https://official-joke-api.appspot.com/random_joke">Official Joke API</a></p>
    {change ? <div>
      <p>{setup}</p>
      <p>{punchline}</p>
      <p>Ba dum tsss</p>
    </div>
    :
    <p>Nothing to see here</p>}
    <button onClick={asyncAwait}>
      Click Me! (Async Await Method)
    </button>
    <button onClick={thenCatch}>
      Click Me! (Then Catch Method)
    </button>
    <button onClick={removeText}>
      Click Me! (Back to Normal)
    </button>
  </>
}
