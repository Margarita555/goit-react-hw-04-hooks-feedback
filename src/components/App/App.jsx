import { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [state, setState] = useState(initialState);

  const onLeaveFeedback = feedbackType => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      return Math.round((state.good * 100) / total);
    }
  };

  const total = countTotalFeedback();
  const statistics = Object.entries(state);
  const options = Object.keys(state);
  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {!total && <Notification message="No feedback given" />}
      </Section>
    </div>
  );
}

export default App;
