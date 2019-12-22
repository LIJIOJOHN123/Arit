import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LetterAvatars from "./Avatar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10
  },
  avatar: {
    backgroundColor: red[500]
  },
  img: {
    height: "40%",
    width: "50%",
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  margin: {
    marginTop: "-8%"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/articles/${single.id}`} className={classes.link}>
        <img
          className={classes.img}
          src="https://www.cricbuzz.com/a/img/v1/980x654/i1/c180150/steve-smith-poured-cold-water.jpg"
        />

        <CardHeader
          className={classes.margin}
          avatar={<LetterAvatars />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="mathrubhumi"
          subheader="September 14, 2016"
        />
        <CardContent className={classes.margin}>
          <Typography variant="body2" color="textSecondary" component="p">
            DALFKJF ADLF ALKJF ALKFJ ALDKJFAL KDFJALK
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.margin}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
