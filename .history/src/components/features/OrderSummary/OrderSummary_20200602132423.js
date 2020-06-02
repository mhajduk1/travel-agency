import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

const OrderSummary = () => (
  <h2 className={styles.component}>Total:<strong>12,345</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.number,
  options: PropTypes.object,
};

export default OrderSummary;