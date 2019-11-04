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
      <div className="team-card__text">
        <span className="team-card__text_bold">Name: </span>
        {props.data.name}
      </div>
      <div className="team-card__text">
        <span className="team-card__text_bold">Full name: </span>
        {props.data.full_name}
      </div>
      <div className="team-card__text">
        <span className="team-card__text_bold">City: </span>
        {props.data.city}
      </div>
      <div className="team-card__text">
        <span className="team-card__text_bold">Abbreviation: </span>
        {props.data.abbreviation}
      </div>
      <div className="team-card__text">
        <span className="team-card__text_bold">Division: </span>
        {props.data.division}
      </div>
      <div className="team-card__text">
        <span className="team-card__text_bold">Conference: </span>
        {props.data.conference}
      </div>
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
