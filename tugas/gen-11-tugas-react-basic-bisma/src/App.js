import React from 'react';

function NotPass() {
  return <p>
    You are not old enough to answer this question! Comeback when you're old enough!
  </p>
}

function Pass() {
  const [result, setResult] = React.useState('')
  console.log(result)

  return <div>
    <p>Well done! you are old enough!</p>
    <p>Please answer this question</p>
    <p>Who is the first President of United States?</p>
    <ButtonAnswer title="John F Kennedy" clicked={() => alert('Wrong Answer!')} />
    <ButtonAnswer title="Barrack Obama" clicked={() => alert('Wrong Answer!')} />
    <ButtonAnswer title="Abraham Lincoln" clicked={() => alert('Correct!')} />
  </div>
}

function ButtonAnswer(args) {
  return <button onClick={args.clicked}>
    {args.title}
  </button>
}

function App() {
  const [name, setName] = React.useState('User')
  const [age, setAge] = React.useState(0)

  let ageResult

  if (age < 18) {
    ageResult = <NotPass />
  }
  else {
    ageResult = <Pass />
  }

  return (
    <div className="App">
      <h1>Hello {name}, welcome to this react example</h1>
      <form>
        <label>Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> <br />
        <label>Enter your age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {ageResult}
      </form>
    </div>
  );
}

export default App;
