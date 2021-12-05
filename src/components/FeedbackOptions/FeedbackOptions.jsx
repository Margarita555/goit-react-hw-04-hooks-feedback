import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(label => (
        <button
          key={label}
          className={s.button}
          onClick={() => {
            onLeaveFeedback(label);
          }}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;
