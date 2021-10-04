import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DefaultLayout = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <div className="whatis-section-content">
          <Typography variant="h3">What Is App Development?</Typography>
          <div>
            <p>
              App Development is the process of creating custom business
              applications that digitize, centralize, and automates your
              business to drive growth, increase brand exposure, and provide
              value to your customers.
            </p>
          </div>
        </div>
      </Grid>
      <Grid container alignItems="center" item xs={4}>
        <div className="whatis-section-image"></div>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
