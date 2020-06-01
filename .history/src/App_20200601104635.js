import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
// TODO - import other views DONE
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';
import CountryContainer from './components/views/Country/CountryContainer';
import TripContainer from './components/views/Trip/TripContainer';
import Contact from './components/views/Info/InfoContainer';
import CountriesContainer from './components/views/Countries/CountriesContainer';
import RegionsContainer from './components/views/Regions/RegionsContainer';
import InfoContainer from './components/views/Info/InfoContainer';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            {/* TODO - add more routes for other views DONE*/}
            <Route exact path='/info' component={Info} />
            <Route exact path='/country/:id' component={CountryContainer} />
            <Route exact path='/trip/:id' component={TripContainer} />
            <Route exact path='/Countries' component={CountriesContainer} />
            <Route exact path='/Regions' component={RegionsContainer} />
            <Route exact path='/Contact' component={InfoContainer}/>
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
