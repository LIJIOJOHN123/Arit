import React, { Fragment } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    background: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",

    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const DesktopBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();
  const authLink = (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">News</Typography>
        <Button>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/articles" className={classes.link}>
            Articles
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/comments" className={classes.link}>
            Comments
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/channels" className={classes.link}>
            Channels
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/f" className={classes.link}>
            Advertise
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/d" className={classes.link}>
            Work From Home
          </Link>
        </Button>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Typography className={classes.title}></Typography>
        <a onClick={logout} href="/">
          Logout
        </a>
      </Toolbar>
    </AppBar>
  );

  const guestLink = (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">News</Typography>
        <Button>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/articles" className={classes.link}>
            Articles
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/comments" className={classes.link}>
            Comments
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/channels" className={classes.link}>
            Channels
          </Link>
        </Button>

        <Button color="inherit">
          <Link to="/f" className={classes.link}>
            Advertise
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/d" className={classes.link}>
            Work From Home
          </Link>
        </Button>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Typography className={classes.title}></Typography>
        <Button>
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </Button>
        <Button>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );

  return (
    <div className={classes.root}>
      {!loading && (
        <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
      )}
    </div>
  );
};

DesktopBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, { logout })(DesktopBar);
