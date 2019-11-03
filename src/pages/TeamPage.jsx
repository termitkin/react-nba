import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import TeamCardContainer from "../components/TeamCardContainer";
import GameCardContainer from "../components/GameCardContainer";

const TeamPage = props => {
  return (
    <div className="wrapper">
      <Header />
      <section>
        <h1 className="heading">Info about {props.team.full_name}</h1>
        <TeamCardContainer teamId={props.params.match.params.id} />
      </section>

      <section>
        <h2 className="heading">
          All {props.team.full_name} games in this month
        </h2>
        <GameCardContainer teamId={props.params.match} />
      </section>
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
