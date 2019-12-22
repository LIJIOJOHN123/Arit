import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
const List = () => {
  return (
    <Fragment>
      <Grid container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(single => (
          <Grid key={single} item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default List;
