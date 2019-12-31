import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCardContainer from "../components/TeamCardContainer";
import GameCardContainer from "../components/GameCardContainer";

const TeamPage = props => {
  return (
    <div className="wrapper">
      <Header />
      <section className="content" style={{ marginBottom: "0" }}>
        <h1 className="heading">Info about <span className="heading__team-name">{props.team.data && props.team.data.full_name}</span></h1>
        <TeamCardContainer teamId={props.params.match.params.id} />
      </section>

      <section className="content">
        <h2 className="heading">
          All <span className="heading__team-name">{props.team.data && props.team.data.full_name}</span> games in this month
        </h2>
        <GameCardContainer teamId={props.params.match} />
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    team: state.addTeamData.teamData
  };
};

export default connect(
  mapStateToProps,
  null
)(TeamPage);

TeamPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired
};
