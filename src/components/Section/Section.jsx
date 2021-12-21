import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  statistics: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
