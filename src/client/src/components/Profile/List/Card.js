import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10
  },
  img: {
    height: "60%",
    width: "50%",
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  margin: {
    marginTop: "-2%"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src="https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/12/28/Kannur-Protest.jpg"
      />
      <Typography variant="h6">I am working</Typography>
      <Typography variant="body2">DFALKJ</Typography>
      <Typography variant="h6">I am working</Typography>
      <Typography variant="body2">DFALKJ</Typography>
    </div>
  );
}
