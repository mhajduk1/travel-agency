import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import {getCountryCodeByTripId} from '../../../redux/tripsRedux'
const mapStateToProps = (state, props) => {


  return {
    options: getOrderOptions(state),
    countryCode: getCountryCodeByTripId(state, props.tripId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
