import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <div className={s.statistics}>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        {statistics.map(([key, value]) => (
          <li className={s.item} key={key}>
            {key}:<span className={s.value}>{value}</span>
          </li>
        ))}
        <li className={s.item}>
          Total:<span className={s.value}>{total}</span>
        </li>
        <li className={s.item}>
          Positive feedback:
          <span className={s.value}>{positivePercentage + '%'}</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
