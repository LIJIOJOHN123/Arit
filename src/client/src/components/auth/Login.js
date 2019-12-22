import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import LetterAvatars from "./Avatar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  outline: {
    padding: 10
  },
  center: {
    paddingLeft: "30%"
  },
  centerSecond: {
    paddingLeft: "15%"
  },
  link: {
    textDecoration: "none"
  }
}));

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const handleChange = email => e => {
    setFormData({ ...formData, [email]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Paper className={classes.outline}>
            <Typography variant="h4" className={classes.center}>
              Login
            </Typography>
            <div className={classes.centerSecond}>
              <LetterAvatars />
            </div>

            <TextField
              required
              id="filled-required"
              value={email}
              onChange={handleChange("email")}
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              required
              id="filled-required"
              onChange={handleChange("password")}
              value={password}
              label="Password"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <br />
            <div className={classes.center}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </div>
            </div>
            <br />
            <div>
              <Typography variant="p">
                Particiation Agreeemnt Private Statement FAQ Help
              </Typography>
            </div>
            <br />
            <div className={classes.centerSecond}>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleSubmit}
                >
                  <Link to="/register" className={classes.link}>
                    Create new Account
                  </Link>
                </Button>
              </div>
            </div>
            <br />
            <Typography variant="p">
              @Crowdsourcing Online Services Privage Limited 2019
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
