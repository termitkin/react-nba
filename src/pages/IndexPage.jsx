import React from "react";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <section>
        <h1 className="heading">List of all today NBA games</h1>
        <GameCardContainer />
      </section>
    </div>
  );
};

export default IndexPage;
