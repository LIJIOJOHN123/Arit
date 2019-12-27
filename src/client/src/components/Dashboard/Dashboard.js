import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { currentProfile } from "../../redux/actions/profile";
import PropTypes from "prop-types";
const Dashboard = ({ profile, currentProfile, auth }) => {
  useEffect(() => {
    currentProfile();
  }, []);
  return <Fragment>Dashboard</Fragment>;
};
Dashboard.propTypes = {
  currentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.auth,
    profile: state.profile
  };
};
export default connect(mapStateToProps, { currentProfile })(Dashboard);
