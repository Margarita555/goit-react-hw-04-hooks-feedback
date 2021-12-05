import { Component } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total) {
      const positivefeedback = this.state.good;
      const positiveFeedbackPercentage = Math.round(
        (positivefeedback * 100) / total,
      );
      return positiveFeedbackPercentage;
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const statistics = Object.entries(this.state);
    const options = Object.keys(this.state);
    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {total > 0 && (
            <Statistics
              statistics={statistics}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {!total && <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}

export default App;
