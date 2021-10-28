import React from "react";
import StaticsLine from "./StaticsLine";

const Statistics = ({ good, neutral, all, bad, average, positives }) => {
  return (
    <div>
      {!good && !bad && !neutral ? (
        "No feedback given"
      ) : (
        <div>
          <h2>statistics</h2>
          <div>
            {/* <p>good {good}</p>
             */}
            <StaticsLine text="good" value={good} />
            <StaticsLine text="neutral" value={neutral} />
            <StaticsLine text="bad" value={bad} />

            <p>all {all}</p>
            <p>
              average{" "}
              {!average && average !== 0 ? "no valid feedback yet" : average}
            </p>
            <p>
              positive {positives ? positives + " %" : "no valid feedback yet"}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
