import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => {
    return <Fragment key={alert.id}>{alert.msg}</Fragment>;
  });
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    alerts: state.alerts
  };
};
export default connect(mapStateToProps)(Alert);
