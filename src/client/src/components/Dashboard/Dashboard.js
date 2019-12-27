import React, { Fragment } from "react";
import { connect } from "react-redux";
import { currentProfile } from "../../redux/actions/profile";
import PropTypes from "prop-types";
const Dashboard = () => {
  return <Fragment>Dashboard</Fragment>;
};
Dashboard.propTypes = {
  currentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(null, { currentProfile })(Dashboard);
