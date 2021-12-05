import { useState } from 'react/cjs/react.development';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

// let options = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const onLeaveFeedback = label => {
    // console.log(label);
    // console.log(goodFeedback);
    switch (label) {
      case 'good':
        setGoodFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      const positiveFeedbackPercentage = Math.round(
        (goodFeedback * 100) / total,
      );
      return positiveFeedbackPercentage;
    }
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  // const statistics = Object.entries(options);
  // const optionsKeys = Object.keys(options);
  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {total > 0 && (
          <Statistics
            // statistics={statistics}
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = label => {
//     this.setState(prevState => ({
//       [label]: prevState[label] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     if (total) {
//       const positivefeedback = this.state.good;
//       const positiveFeedbackPercentage = Math.round(
//         (positivefeedback * 100) / total,
//       );
//       return positiveFeedbackPercentage;
//     }
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const statistics = Object.entries(this.state);
//     const options = Object.keys(this.state);
//     return (
//       <div className="app">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           {total > 0 && (
//             <Statistics
//               statistics={statistics}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//           {!total && <Notification message="No feedback given" />}
//         </Section>
//       </div>
//     );
//   }
// }
