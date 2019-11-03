import React from "react";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";

const AllTeams = () => {
  return (
    <div className="wrapper">
      <Header />
      <h1 className="heading">List of today NBA games</h1>
      <GameCardContainer />
    </div>
  );
};

export default AllTeams;
