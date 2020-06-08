import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PageTitle from '../OrderForm/OrderForm';



class OrderForm extends React.Component {
  render() {
    const {tripCost, options} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary tripCost={tripCost} options={options}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.number,
};

export default OrderForm; 