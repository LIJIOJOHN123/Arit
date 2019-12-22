import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import DesktopBar from "./Desktop";
import MobileMenu from "./Mobile";

const useStyle = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
const Menu = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        <DesktopBar />
      </div>
      <div className={classes.sectionMobile}>
        <MobileMenu />
      </div>
    </Fragment>
  );
};

export default Menu;
