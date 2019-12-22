import React, { Fragment } from "react";
import { Grid, TextField, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LetterAvatars from "./Avatar";
import { Link } from "react-router-dom";
const userStyle = makeStyles(theme => ({
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
const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const { name, email, password } = formData;
  const handleChanges = name => e => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  const classes = userStyle();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Paper className={classes.outline}>
            <Typography variant="h4" className={classes.center}>
              Register
            </Typography>
            <div className={classes.centerSecond}>
              <LetterAvatars />
            </div>
            <TextField
              required
              id="filled-required"
              value={name}
              onChange={handleChanges("name")}
              label="Name"
              margin="normal"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              required
              id="outlined-required"
              onChange={handleChanges("email")}
              value={email}
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={handleChanges("password")}
              value={password}
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <div className={classes.center}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                color="primary"
              >
                Register
              </Button>
            </div>
            <br />
            <div>
              <Typography variant="p">
                Particiation Agreeemnt Private Statement FAQ Help
              </Typography>
            </div>
            <br />
            <Typography>Do you have alread account?</Typography>
            <br />
            <div className={classes.center}>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleSubmit}
                >
                  <Link to="/login" className={classes.link}>
                    login
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

export default Register;
