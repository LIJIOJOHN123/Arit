import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 5
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

export default function SingelCard({ single }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/articles/${single}`} className={classes.link}>
        <img
          className={classes.img}
          src="https://www.cricbuzz.com/a/img/v1/980x654/i1/c180150/steve-smith-poured-cold-water.jpg"
        />
        <CardContent className={classes.margin}>
          <Typography variant="body2" color="textSecondary" component="p">
            DALFKJF ADLF
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
