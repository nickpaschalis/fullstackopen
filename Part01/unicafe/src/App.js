import React, { useState } from 'react';

const Statistics = props => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / all;
  let positive = (props.good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClickHandler = () => {
    console.log('clicked');
    setGood(good + 1);
  };

  const neutralClickHandler = () => {
    setNeutral(neutral + 1);
  };

  const badClickHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={goodClickHandler}>good</button>
      <button onClick={neutralClickHandler}>neutral</button>
      <button onClick={badClickHandler}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
