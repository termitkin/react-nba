import React, { useState, useEffect } from "react";
import TeamCard from "../TeamCard";
import { connect } from "react-redux";
import { addTeamData } from "../../store/team/actions";

const TeamCardContainer = props => {
  const [teamCard, fetchTeamCard] = useState([]);
  const [fetchError, fetchErrorHandle] = useState(false);
  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/teams/${props.teamId}`)
      .then(el => el.json())
      .then(el => {
        fetchTeamCard(el);
        props.addTeamData(el);
      })
      .catch(err => {
        fetchErrorHandle(err);
      });
  }, [props, props.teamId]);

  if (teamCard.id !== undefined) {
    return <div className="content">{<TeamCard data={teamCard} />}</div>;
  } else if (fetchError) {
    return "Error. Try to reload this page.";
  } else {
    return "Loading...";
  }
};

const mapDispatchToProps = {
  addTeamData
};

export default connect(
  null,
  mapDispatchToProps
)(TeamCardContainer);
