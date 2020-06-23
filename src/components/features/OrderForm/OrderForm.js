import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
  render() {
    const {tripCost, options, setOrderOption} = this.props;
    return (
      <Grid>
        <Row>
          {pricing.map(option => (
            <Col md={4} key={option.id} >
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;