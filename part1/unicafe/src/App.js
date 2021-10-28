import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good + bad * -1) / all;
  const positives = (good * 100) / all;

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positives={positives}
      />
    </div>
  );
};

export default App;
