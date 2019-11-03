import React from "react";
import Header from "../components/Header";
import TeamCardContainer from "../components/TeamCardContainer";

const AllTeams = () => {
  return (
    <div className="wrapper">
      <Header />
      <section>
        <h1 className="heading">List of all NBA teams</h1>
        <TeamCardContainer allTeams={true} />
      </section>
    </div>
  );
};

export default AllTeams;
