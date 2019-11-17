import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedDay } from "../store/calendar/actions";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import currentDate from "../utils/currentDate";

const IndexPage = props => {
  const dateFromUrl = props.params.match.params.date;

  let headingText = "";
  if (dateFromUrl !== undefined && dateFromUrl !== currentDate()) {
    headingText = `List of all ${currentDate(new Date(dateFromUrl))} NBA games`;
  } else {
    headingText = "List of all today NBA games";
  }

  let selectedDay = "";
  if (props.params.match.path === "/") {
    selectedDay = currentDate();
  } else if (dateFromUrl !== undefined) {
    selectedDay = dateFromUrl;
  } else if (props.selectedDay !== undefined) {
    selectedDay = props.selectedDay;
  } else {
    selectedDay = currentDate();
  }
  setSelectedDay(selectedDay);

  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <h1 className="heading">{headingText}</h1>
        <div className="cards-and-calendar">
          <GameCardContainer selectedDay={selectedDay} />
          <Calendar selectedDay={selectedDay} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedDay: state.selectDayReducer.selectedDate
  };
};

const mapDispatchToProps = {
  setSelectedDay
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

IndexPage.propTypes = {
  params: PropTypes.object.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
  selectedDay: PropTypes.string
};
