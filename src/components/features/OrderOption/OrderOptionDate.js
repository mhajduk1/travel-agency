import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class OrderOptionDate extends React.Component {
    state = {
      startDate: new Date(),
    };
   
    handleChange = date => {
      this.setState({
        startDate: date,
      });
    };
   
    render() {
      return (
        <DatePicker
          selected={this.state.date}
          onSelect={this.handleSelect} //when day is clicked
          onChange={this.handleChange} //only when value has changed
        />
      );
    }
}

export default OrderOptionDate;