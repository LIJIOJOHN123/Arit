import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChannelList from "./List/List";
import ArticleList from "../Articles/index";
import { Box, Typography } from "@material-ui/core";
import ProfileSummary from "./Summary";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  bold: {
    fontWeight: 1000,
    color: "black"
  }
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.bold} label="Summary" />
        <Tab className={classes.bold} label="Channels" />
        <Tab className={classes.bold} label="Follow" />
        <Tab className={classes.bold} label="Profile" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfileSummary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChannelList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChannelList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ArticleList />
      </TabPanel>
    </Fragment>
  );
}
