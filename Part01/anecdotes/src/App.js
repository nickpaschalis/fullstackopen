import React, { useState } from 'react';

const Title = props => {
  if (props.initialRender) {
    return <h2>Anecdote of the Day</h2>;
  }

  return <h2>Anecdote</h2>;
};

const Anecdote = props => {
  return (
    <div>
      <p>{props.anecdote}</p>
      <p>has {props.vote} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [initialRender, setInitialRender] = useState(true);
  const [selected, setSelected] = useState(5);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const nextAnecdoteHandler = () => {
    setInitialRender(false);
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const checkMaxVotes = num => {
    if (votes[num] > votes[mostVoted]) {
      setMostVoted(num);
    }
  };

  const voteHandler = () => {
    if (votes[selected] === votes[mostVoted]) {
      setMostVoted(selected);
    }
    checkMaxVotes(selected);
    const newVotesArray = [...votes];
    newVotesArray[selected]++;
    setVotes(newVotesArray);
  };

  return (
    <div>
      <Title initialRender={initialRender} />
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <button onClick={voteHandler}>vote</button>
      <button onClick={nextAnecdoteHandler}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[mostVoted]} vote={votes[mostVoted]} />
    </div>
  );
};

export default App;
