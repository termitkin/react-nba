import React from "react";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setSelectedDay } from "../../store/calendar/actions";
import currentDate from "../../utils/currentDate";
import "./styles.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day) {
    this.props.history.push(`date=${currentDate(day)}`);
    this.props.setSelectedDay(currentDate(day));
  }

  render() {
    return (
      <DayPicker
        onDayClick={this.handleDayClick}
        selectedDays={new Date(this.props.selectedDay)}
        month={new Date(this.props.selectedDay)}
      />
    );
  }
}

const mapDispatchToProps = {
  setSelectedDay
};

export default connect(null, mapDispatchToProps)(withRouter(Calendar));

Calendar.propTypes = {
  selectedDay: PropTypes.string,
  setSelectedDay: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
