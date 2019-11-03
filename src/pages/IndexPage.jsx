import React from "react";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";
import Calendar from "../components/Calendar";

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <h1 className="heading">List of all today NBA games</h1>
      <GameCardContainer />
      <Calendar />
    </div>
  );
};

export default IndexPage;
