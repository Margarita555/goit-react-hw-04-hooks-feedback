import { useReducer } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function countReducer(state, feedbackType) {
  switch (feedbackType) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      throw new Error('Unsupported feedback type');
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      const positiveFeedbackPercentage = Math.round((state.good * 100) / total);
      return positiveFeedbackPercentage;
    }
  };

  const total = countTotalFeedback();
  const statistics = Object.entries(state);
  const options = Object.keys(state);
  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={dispatch} />
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
