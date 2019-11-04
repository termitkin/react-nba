import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import GameCard from "../GameCard";
import currentDate from "../../utils/currentDate";
import currentYearMonthDays from "../../utils/currentYearMonthDays";
import "./styles.css";

const GameCardContainer = props => {
  let [gameCards, fetchgameCards] = useState([]);
  let [contentLoaded, contentLoadedUpdate] = useState(false);
  const [fetchError, fetchErrorHandle] = useState(false);
  useEffect(() => {
    const API_URL = "https://www.balldontlie.io/api/v1";
    let currentUrl = "";

    if (props.teamId) {
      const start_date = currentYearMonthDays()[0];
      const end_date = currentYearMonthDays()[1];
      currentUrl = `${API_URL}/games?team_ids[]=${props.teamId.params.id}&start_date=${start_date}&end_date=${end_date}`;
    } else if (props.selectedDay !== undefined) {
      currentUrl = `${API_URL}/games?start_date=${props.selectedDay}&end_date=${props.selectedDay}`;
    } else {
      currentUrl = `${API_URL}/games?start_date=${currentDate()}&end_date=${currentDate()}`;
    }

    axios
      .get(currentUrl)
      .then(el => {
        el["data"]["data"].sort((a, b) => {
          return new Date(a["date"]) - new Date(b["date"]);
        });
        fetchgameCards(el["data"]["data"]);
        contentLoadedUpdate(true);
      })
      .catch(err => {
        fetchErrorHandle(err);
      });
  }, [props]);

  gameCards = gameCards.map(el => {
    return <GameCard key={el.id} data={el} />;
  });

  if (gameCards.length === 0 && contentLoaded === true) {
    return "There are no games on this day";
  }
  if (gameCards.length !== 0) {
    if (props.teamId === undefined) {
      return <div className="game-card-content_index-page">{gameCards}</div>;
    }
    return <div className="game-card-content">{gameCards}</div>;
  } else if (fetchError) {
    return "Error. Try to reload this page.";
  }
  return "Loading...";
};

export default GameCardContainer;

GameCardContainer.propTypes = {
  teamId: PropTypes.object
};
