
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {

  render() {
    const { currentValue, setOptionValue} = this.props;

    const handleChange = (date) => {
      setOptionValue(`${date.toLocaleDateString()}`);
    };
    return (
      <div>
        <DatePicker
          value={currentValue}
          onChange={(date) => handleChange(date)}
        />
        {`(min. 14 days from today)`}
      </div>
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;