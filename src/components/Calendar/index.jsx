import React from "react";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectDay } from "../../store/calendar/actions";
import currentDate from "../../utils/currentDate";
import "./styles.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day) {
    this.props.history.push(`date=${currentDate(day)}`);
    this.props.selectDay(day);
  }

  render() {
    let selectedDay = "";
    if (this.props.match.params.date !== undefined) {
      selectedDay = this.props.match.params.date;
    } else if (this.props.selectedDay !== undefined) {
      selectedDay = this.props.selectedDay;
    } else {
      selectedDay = currentDate();
    }

    return (
      <DayPicker
        onDayClick={this.handleDayClick}
        selectedDays={new Date(selectedDay)}
        month={new Date(selectedDay)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDay: state.selectDayReducer.selectedDate
  };
};

const mapDispatchToProps = {
  selectDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Calendar));

Calendar.propTypes = {
  selectDay: PropTypes.func.isRequired,
  selectedDay: PropTypes.object
};
