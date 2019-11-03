import React from "react";
import Header from "../components/Header";
import TeamCardContainer from "../components/TeamCardContainer";
import Footer from "../components/Footer";

const AllTeams = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <h1 className="heading">List of all NBA teams</h1>
        <TeamCardContainer allTeams={true} />
      </section>
      <Footer />
    </div>
  );
};

export default AllTeams;
