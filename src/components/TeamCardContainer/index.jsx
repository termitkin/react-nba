import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TeamCard from "../TeamCard";
import { connect } from "react-redux";
import { addTeamData } from "../../store/team/actions";
import "./styles.css";

const TeamCardContainer = props => {
  let [teamCard, fetchTeamCard] = useState([]);
  const [fetchError, fetchErrorHandle] = useState(false);

  const API_URL = "https://www.balldontlie.io/api/v1";
  let currentUrl = "";

  if (props.allTeams) {
    currentUrl = `${API_URL}/teams`;
  } else {
    currentUrl = `${API_URL}/teams/${props.teamId}`;
  }

  useEffect(() => {
    axios
      .get(currentUrl)
      .then(el => {
        if (props.allTeams) {
          fetchTeamCard(el["data"]["data"]);
        } else {
          fetchTeamCard([el["data"]]);
          props.addTeamData(el);
        }
      })
      .catch(err => {
        fetchErrorHandle(err);
      });
  }, [currentUrl, props]);

  let containerClassName = "";
  if (teamCard.length > 0) {
    teamCard = teamCard.map(el => {
      if (props.allTeams) {
        containerClassName = "all-team-content";
        return <TeamCard key={el.id} data={el} />;
      }
      return <TeamCard key={el.id} data={el} />;
    });
    if (props.allTeams) {
      return <div className={containerClassName}>{teamCard}</div>;
    }
    return <React.Fragment>{teamCard}</React.Fragment>;
  } else if (fetchError) {
    return "Error. Try to reload this page.";
  }
  return "Loading...";
};

const mapDispatchToProps = {
  addTeamData
};

export default connect(
  null,
  mapDispatchToProps
)(TeamCardContainer);

TeamCardContainer.propTypes = {
  addTeamData: PropTypes.func.isRequired,
  teamId: PropTypes.string,
  allTeams: PropTypes.bool
};
