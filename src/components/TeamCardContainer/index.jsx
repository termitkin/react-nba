import React, { useState, useEffect } from "react";
import TeamCard from "../TeamCard";

const TeamCardContainer = props => {
  let [teamCard, fetchTeamCard] = useState([]);
  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/teams/${props.teamId}`)
      .then(el => el.json())
      .then(el => {
        fetchTeamCard(el);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.teamId]);

  if (teamCard.id !== undefined) {
    return <div className="content">{<TeamCard data={teamCard} />}</div>;
  } else {
    return "Loading...";
  }
};

export default TeamCardContainer;
