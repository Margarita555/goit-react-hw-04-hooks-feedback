import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistics}>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        <li className={s.item}>
          good:<span className={s.value}>{good}</span>
        </li>
        <li className={s.item}>
          neutral:<span className={s.value}>{neutral}</span>
        </li>
        <li className={s.item}>
          bad:<span className={s.value}>{bad}</span>
        </li>
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
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

// const Statistics = ({ statistics, total, positivePercentage }) => {
//   return (
//     <div className={s.statistics}>
//       <h2 className={s.title}>Statistics</h2>
//       <ul className={s.list}>
//         {statistics.map(([key, value]) => (
//           <li className={s.item} key={key}>
//             {key}:<span className={s.value}>{value}</span>
//           </li>
//         ))}
//         <li className={s.item}>
//           Total:<span className={s.value}>{total}</span>
//         </li>
//         <li className={s.item}>
//           Positive feedback:
//           <span className={s.value}>{positivePercentage + '%'}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
