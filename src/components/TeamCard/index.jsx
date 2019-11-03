import React from "react";
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
