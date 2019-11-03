import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import GameCard from "../GameCard";
import currentDate from "../../utils/currentDate";
import currentYearMonthDays from "../../utils/currentYearMonthDays";
import "./styles.css";

const GameCardContainer = props => {
  let [gameCards, fetchgameCards] = useState([]);
  const [fetchError, fetchErrorHandle] = useState(false);
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
        fetchErrorHandle(err);
      });
  }, [props]);

  gameCards = gameCards.map(el => {
    return <GameCard key={el.id} data={el} />;
  });

  if (gameCards.length !== 0) {
    return <div className="game-card-content">{gameCards}</div>;
  } else if (fetchError) {
    return "Error. Try to reload this page.";
  } else {
    return "Loading...";
  }
};

export default GameCardContainer;
