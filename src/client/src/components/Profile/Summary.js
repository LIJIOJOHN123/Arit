import React, { Fragment } from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { currentProfile } from "../../redux/actions/profile";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  pagebackgrond: {
    backgroundColor: "#f0f0f0"
  },
  paper: {
    padding: "2%",
    paddingTop: "1%"
  },
  paper1: {
    padding: "1%"
  },

  img: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "block"
  },
  img1: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "block"
  },
  channelMargin: {
    margin: "5%"
  },
  pageMargin: {
    margin: "6%"
  }
}));
const ProfileSummary = ({ profile, currentProfile, auth }) => {
  const classes = useStyle();
  React.useEffect(() => {
    currentProfile();
  }, []);
  return (
    <Fragment className={classes.pagebackgrond}>
      <Grid container className={classes.pagebackgrond}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className={classes.paper1}
        >
          {profile.profile ? (
            <Fragment>
              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>
                  Profile
                </Typography>
                <Typography color="primary">
                  Name: {profile.profile.user.name}
                </Typography>
                <Typography>
                  User Name: {profile.profile.user.userName}
                </Typography>
                <Typography>Email: {profile.profile.user.email}</Typography>
                <Typography>Mobile: {profile.profile.user.mobile}</Typography>
                <Typography>
                  First Language: {profile.profile.firstLanguage}
                </Typography>
                <Typography gutterBottom>
                  Created on :{profile.profile.user.createdAt}
                </Typography>
                <div className={classes.button}>
                  <Button variant="contained" color="primary">
                    Edit Profile
                  </Button>
                </div>
              </Paper>
            </Fragment>
          ) : null}
          <br />
          {profile.profile ? (
            <Fragment>
              <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                  Channels
                </Typography>
                <Grid container>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(single => (
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div>
                        <img
                          className={classes.img}
                          src="https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/12/28/Kannur-Protest.jpg"
                        />
                        <Typography>Lijo John</Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
                <div className={classes.button}>
                  <Button variant="contained" color="primary">
                    More Channels
                  </Button>
                </div>
              </Paper>
            </Fragment>
          ) : null}
          {profile.profile ? (
            <Fragment>
              <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                  Followers
                </Typography>
                <Grid container>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(single => (
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div>
                        <img
                          className={classes.img}
                          src="https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/12/28/Kannur-Protest.jpg"
                        />
                        <Typography>Lijo John</Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
                <div className={classes.button}>
                  <Button variant="contained" color="primary">
                    More Followers
                  </Button>
                </div>
              </Paper>
            </Fragment>
          ) : null}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.paper}
        >
          {profile.profile ? (
            <Fragment>
              <Grid container>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(single => (
                  <Paper>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div className={classes.margin}>
                        <img
                          className={classes.img1}
                          src="https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/12/28/Kannur-Protest.jpg"
                        />
                        <Typography>Lijo John</Typography>
                      </div>
                    </Grid>
                  </Paper>
                ))}
              </Grid>
            </Fragment>
          ) : null}
        </Grid>
      </Grid>
    </Fragment>
  );
};
ProfileSummary.propTypes = {
  currentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

export default connect(mapStateToProps, { currentProfile })(ProfileSummary);
