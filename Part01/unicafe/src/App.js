import React, { useState } from 'react';

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = props => {
  return (
    <p>
      {props.title} {props.value}
    </p>
  );
};

const Statistics = props => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / all;
  let positive = (props.good / all) * 100 + '%';

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine title='good' value={props.good} />
      <StatisticLine title='neutral' value={props.neutral} />
      <StatisticLine title='bad' value={props.bad} />
      <StatisticLine title='all' value={all} />
      <StatisticLine title='average' value={average} />
      <StatisticLine title='positive' value={positive} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClickHandler = () => {
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
      <Button onClick={goodClickHandler} text='good' />
      <Button onClick={neutralClickHandler} text='neutral' />
      <Button onClick={badClickHandler} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
