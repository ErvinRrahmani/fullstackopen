import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h2>{name}</h2>  

const Anecdote = ({text, votesCount}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votesCount} votes</p>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick} type="button">{text}</button>
    </div>
  )
}

const Winner = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}

  const App = ({anecdotes}) => {
    
    const [selected, setSelected] = useState(0)
    const [votes, setAllVotes] = useState(Array(6).fill(0))

    const handleVoteClick = () => {
      const newAllVotes = [...votes];
      newAllVotes[selected] += 1
      setAllVotes(newAllVotes)
    }

    const generateRandoms = () => {
      let randomNumber = Math.floor(Math.random() * anecdotes.length) 
      setSelected(randomNumber);
    }

    return (
      <div>
        <Header name="Anecdote of the day" />
        <Anecdote text={anecdotes[selected]} votesCount={votes[selected]} />
        <Button onClick={generateRandoms} text="Next Anecdote"/>
        <Button onClick={handleVoteClick} text="Vote" />
        <Header name="Anecdote with most votes" />
        <Winner anecdotes={anecdotes} allVotes={votes}/>
      </div>
    )
  }


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);

