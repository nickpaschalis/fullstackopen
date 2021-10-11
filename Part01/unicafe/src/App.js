import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const good = 6;
  const neutral = 2;
  const bad = 1;
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positive = (good / all) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default App;
