import React from 'react';

import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


const DaysToSummer = ({ days }) => (
  <div className={styles.title}>
    {days > 0 && (
      <span>Do lata zostało {days} dni</span>
    )}

    {(days <= 0 && days != 1) && (
      <span>Mamy Lato</span>
    )}

    {days == 1 && (
      <span>Do lata został 1 dzień</span>
    )}
  </div>
);


DaysToSummer.propTypes = {
  days: PropTypes.number,
};

export default DaysToSummer;
