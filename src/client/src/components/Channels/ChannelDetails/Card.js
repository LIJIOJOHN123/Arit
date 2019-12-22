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

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    marginBottom: "-4%"
  },
  avatar: {
    backgroundColor: red[500]
  },
  img: {
    height: 450,
    width: "100%"
  },
  margin: {
    marginTop: "-6%"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img
        className={classes.img}
        src="http://www.trendycovers.com/covers/merry_christmas_facebook_cover_1482383639.jpg"
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
    </Card>
  );
}
