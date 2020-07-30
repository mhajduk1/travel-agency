import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import {getCountryCodeByTripId} from '../../../redux/tripsRedux'

const mapStateToProps = (state, props) => ({
  options: getOrderOptions(state),
  countryCode: getCountryCodeByTripId(state, props.tripId),
  //const trip = getTripById(state, props.match.params.id);
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});
//

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
