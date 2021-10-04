import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import sectionImage from "images/pages/Homepage/industries-served.png";

const DefaultLayout = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h3">Industries Served</Typography>
        <p>
          We work with individuals and organizations spanning a variety of
          industries across the United States. Our team has over 15 years of
          software development and web application experience and we can provide
          you with a solution that meets your needs.
        </p>
      </Grid>
      <Grid container item justify="center">
        <img src={sectionImage} alt="" />
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
