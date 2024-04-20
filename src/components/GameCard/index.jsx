import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import convertDate from "../../utils/gameCardDateConverter";
import { Link, HashRouter as Router } from "react-router-dom";
import "./styles.css";

const GameCard = props => {
  const [visitorLogoSrc, setVisitorLogoSrc] = useState(null);
  const [homeLogoSrc, setHomeLogoSrc] = useState(null);

  useEffect(() => {
    try {
      setVisitorLogoSrc(require(`../../assets/teamIcons/${props.data.visitor_team.abbreviation}.svg`));
    } catch (e) {
      console.error(e.message);
    }

    try {
      setHomeLogoSrc(require(`../../assets/teamIcons/${props.data.home_team.abbreviation}.svg`));
    } catch (e) {
      console.error(e.message);
    }
  }, [props]);

  return (
    <article className="game-card">
      <p className="game-card__starts-time">
        Game starts in {convertDate(props.data.date)}
      </p>

      <div className="game-card__teams">
        <div className="game-card__team">
          <div className="game-card__scores">
            {props.data.visitor_team_score}
          </div>

          <Router>
            <Link
              to={"/team=" + props.data.visitor_team.id}
              title={props.data.visitor_team.full_name}
              className="link game-card__team-name"
            >
              {props.data.visitor_team.name}
            </Link>
          </Router>

          {
            visitorLogoSrc ? (
              <img
                className="game-card__team-logo"
                src={visitorLogoSrc}
                alt={`${props.data.visitor_team.full_name} logo`}
              />
            ) : null
          }
        </div>

        <div className="game-card__scores">
          <div>Scores</div>
        </div>

        <div className="game-card__team">
          <div className="game-card__scores">{props.data.home_team_score}</div>

          <Router>
            <Link
              to={"/team=" + props.data.home_team.id}
              title={props.data.home_team.full_name}
              className="link game-card__team-name"
            >
              {props.data.home_team.name}
            </Link>
          </Router>

          {
            homeLogoSrc ? (
              <img
                className="game-card__team-logo"
                src={homeLogoSrc}
                alt={`${props.data.home_team.full_name} logo`}
              />
            ) : null
          }
        </div>
      </div>
    </article>
  );
};

export default GameCard;

GameCard.propTypes = {
  data: PropTypes.exact({
    date: PropTypes.string.isRequired,
    home_team: PropTypes.object.isRequired,
    home_team_score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    period: PropTypes.number.isRequired,
    postseason: PropTypes.bool.isRequired,
    season: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    time: PropTypes.string,
    visitor_team: PropTypes.object.isRequired,
    visitor_team_score: PropTypes.number.isRequired
  })
};
