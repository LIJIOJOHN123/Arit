import React, { Fragment, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchVideo } from "../../redux/actions/index";
import Card from "./Card";

const List = props => {
  React.useEffect(() => {
    props.fetchVideo();
  }, []);
  return (
    <Fragment>
      <Typography variant="h6" color="secondary" align="center">
        Latest
      </Typography>
      <Grid container>
        {[1, 2, 3, 5].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" color="secondary" align="center">
        Sponsored
      </Typography>
      <Grid container>
        {[1, 2, 3, 5].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {[
          1,
          2,
          3,
          5,
          6,
          7,
          8,
          9,
          1,
          2,
          3,
          5,
          6,
          7,
          8,
          9,
          1,
          2,
          3,
          5,
          6,
          7,
          8,
          9,
          1,
          2,
          3,
          5,
          6,
          7,
          8,
          9
        ].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" color="secondary" align="center">
        Channels
      </Typography>

      <Grid container>
        {[1, 2, 3, 5, 6, 7, 8, 9].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" color="secondary" align="center">
        Comments
      </Typography>
      <Grid container>
        {[1, 2, 3, 5, 6, 7, 8, 9].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};
export default connect(mapStateToProps, { fetchVideo })(List);
