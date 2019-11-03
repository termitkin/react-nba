import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import GameCard from "../GameCard";
import currentDate from "../../utils/currentDate";
import currentYearMonthDays from "../../utils/currentYearMonthDays";

const GameCardContainer = props => {
  let [gameCards, fetchgameCards] = useState([]);
  console.log(gameCards, props);
  useEffect(() => {
    const API_URL = "https://www.balldontlie.io/api/v1";
    let currentUrl = "";

    if (props.teamId) {
      const start_date = currentYearMonthDays()[0];
      const end_date = currentYearMonthDays()[1];
      currentUrl = `${API_URL}/games?team_ids[]=${props.teamId.params.id}&start_date=${start_date}&end_date=${end_date}`;
    } else {
      currentUrl = `${API_URL}/games?start_date=${currentDate()}&end_date=${currentDate()}`;
    }

    fetch(currentUrl)
      .then(el => el.json())
      .then(el => {
        el["data"].sort((a, b) => {
          return new Date(a["date"]) - new Date(b["date"]);
        });
        fetchgameCards(el["data"]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);

  gameCards = gameCards.map(el => {
    return <GameCard key={el.id} data={el} />;
  });

  return (
    <div className="content">
      <h2>555awdawd awd awd </h2>
      {gameCards}
    </div>
  );
};

export default GameCardContainer;
