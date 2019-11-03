import React from "react";
import Header from "../components/Header";
import GameCardContainer from "../components/GameCardContainer";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <h1 className="heading">List of all today NBA games</h1>
        <GameCardContainer />
      </section>
      <Footer />
    </div>
  );
};

export default IndexPage;
