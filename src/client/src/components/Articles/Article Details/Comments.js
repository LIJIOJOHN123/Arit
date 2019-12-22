import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#ffcccc"
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-1/p160x160/12360415_948901455178115_3240148525901529269_n.jpg?_nc_cat=106&_nc_ohc=e2bl334PE6cAQl4T__TaEVb-8-ug7InJa1f-FtTgrBoWiv5r7g48hiGsg&_nc_ht=scontent.fblr1-3.fna&oh=85bca5063386e928275e4c8699e8ea32&oe=5E730C72"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography variant="p" color="black">
                I'll be in your neighborhood doing errands this aflkadj alfdjalf
                dajfdaljfldajfal faljfaljfdaljfal adlfja lfjdal fjal faljfal
                dsalkfjal alfdjal daflkajfl aldfjalf alkfjalkjfal lfkad
                fjlakjfdla kjflkaj lkdajslkfjslj dflsajf
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
