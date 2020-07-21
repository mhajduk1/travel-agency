import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


import {Row, Col, Grid} from 'react-flexbox-grid';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost, tripId, tripName,countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  console.log('name', name);

  const payload = {
    ...options,
    totalCost,
    name,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);

      const { name, contact } = options;

      if (name == '') {
        window.alert('Fill your name');
      }
      else if (contact == '') {
        window.alert('Fill your contact');
      }
    }).then(function(response){
      return response.json();
    });

};
const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, countryCode}) => (
  console.log(countryCode),

  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id} >
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
        <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
