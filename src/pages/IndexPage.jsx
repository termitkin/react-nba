import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import currentDate from "../utils/currentDate";

const IndexPage = props => {
  let headingText = "";
  if (
    props.params.match.params.date !== undefined &&
    props.params.match.params.date !== currentDate()
  ) {
    headingText = `List of all ${currentDate(
      new Date(props.params.match.params.date)
    )} NBA games`;
  } else {
    headingText = "List of all today NBA games";
  }

  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <h1 className="heading">{headingText}</h1>
        <div className="cards-and-calendar">
          <GameCardContainer selectedDay={props.params.match.params.date} />
          <Calendar />
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

export default connect(mapStateToProps, null)(IndexPage);

IndexPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  selectedDay: PropTypes.object
};
