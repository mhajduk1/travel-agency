import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, options}) => (
  <h2 className={styles.component}>Total:<strong>{calculateTotal(formatPrice(parseInt(tripCost)), options)}</strong></h2>
);

export default OrderSummary;