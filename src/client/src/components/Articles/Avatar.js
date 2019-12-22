import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-1/p160x160/12360415_948901455178115_3240148525901529269_n.jpg?_nc_cat=106&_nc_ohc=e2bl334PE6cAQl4T__TaEVb-8-ug7InJa1f-FtTgrBoWiv5r7g48hiGsg&_nc_ht=scontent.fblr1-3.fna&oh=85bca5063386e928275e4c8699e8ea32&oe=5E730C72"
        className={classes.bigAvatar}
      />
    </div>
  );
}
