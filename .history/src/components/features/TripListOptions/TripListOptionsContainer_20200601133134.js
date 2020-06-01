import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, changeTags, changeCost} from '../../../redux/filtersRedux';


const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDuration: duration => dispatch(changeDuration(duration)),
  changeTags: tags => dispatch(changeTags(tags)),
  changeCost: cost => dispatch(changeCost(cost)),
  // TODO - add more dispatchers for other filters DONE
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
