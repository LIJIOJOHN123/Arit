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
import CenteredTabs from "./SubHeading";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: 300,
      width: "100%",
      marginTop: 20
    }
  },
  sectionMobile: {
    display: "flex",
    height: 200,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  sectionDesktop1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginTop: "-6%"
    }
  },
  sectionMobile1: {
    display: "flex",
    marginTop: "-14%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  link: {
    textDecoration: "none"
  },
  tab: {
    marginTop: "-3%"
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>
        <img
          className={classes.sectionDesktop}
          src="http://www.trendycovers.com/covers/merry_christmas_facebook_cover_1482383639.jpg"
        />
        <img
          className={classes.sectionMobile}
          src="http://www.trendycovers.com/covers/merry_christmas_facebook_cover_1482383639.jpg"
        />
      </div>
      <div className={classes.sectionDesktop1}>
        <LetterAvatars />
      </div>
      <div className={classes.sectionMobile1}>
        <LetterAvatars />
      </div>
      <div className={classes.tab}>
        <CenteredTabs />
      </div>
    </div>
  );
}
