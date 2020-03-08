import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const TeamCard = props => {
  return (
    <article className="team-card">
      <img
        className="team-card__logo"
        src={require(`../../assets/teamIcons/${props.data.abbreviation}.svg`)}
        alt={`${props.data.full_name} logo`}
      />

      <ul className="team-card__info-list">
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">Name: </span>{props.data.name}
        </li>
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">Full name: </span>{props.data.full_name}
        </li>
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">City: </span>{props.data.city}
        </li>
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">Abbreviation: </span>{props.data.abbreviation}
        </li>
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">Division: </span>{props.data.division}
        </li>
        <li className="team-card__info-list-elem">
          <span className="team-card__text-accent">Conference: </span>{props.data.conference}
        </li>
      </ul>

    </article>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  data: PropTypes.exact({
    abbreviation: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};
