import React from "react";
import convertDate from "../../utils/gameCardDateConverter";
import { Link, HashRouter as Router } from "react-router-dom";
import "./styles.css";

const GameCard = props => {
  return (
    <article className="game-card">
      <div className="game-card__starts-time">
        Game starts in {convertDate(props.data.date)}
      </div>

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

          <img
            className="team-logo game-card__team-logo"
            src={require(`../../assets/teamIcons/${props.data.visitor_team.abbreviation}.svg`)}
            alt={`${props.data.visitor_team.full_name} logo`}
          />
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

          <img
            className="team-logo game-card__team-logo"
            src={require(`../../assets/teamIcons/${props.data.home_team.abbreviation}.svg`)}
            alt={`${props.data.home_team.full_name} logo`}
          />
        </div>
      </div>
    </article>
  );
};

export default GameCard;
