import React from "react";
import Header from "../components/Header";
import TeamCardContainer from "../components/TeamCardContainer";
import GameCardContainer from "../components/GameCardContainer";

const TeamPage = props => {
  return (
    <div className="wrapper">
      <Header />
      <TeamCardContainer teamId={props.params.match.params.id} />
      <GameCardContainer teamId={props.params.match} />
    </div>
  );
};

export default TeamPage;
