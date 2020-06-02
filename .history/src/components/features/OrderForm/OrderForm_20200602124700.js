import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../OrderForm/OrderForm';

import {Row, Col, Grid} from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render() {
    const {cost} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderForm tripCost={cost} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  cost: PropTypes.number,
};

export default OrderForm; 