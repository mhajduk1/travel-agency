import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import {getCountryCodeByTripId} from '../../../redux/tripsRedux'

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  countryCode: getCountryCodeByTripId(state),
  //const trip = getTripById(state, props.match.params.id);
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});
//

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
