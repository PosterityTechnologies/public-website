import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import sectionImage from "images/pages/Homepage/industries-served-mobile.png";

const MobileLayout = () => {
  return (
    <div className="mobile-section">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Industries Served</Typography>
          <p>
            We work with organizations spanning a variety of industries across
            the United States. Our team has over 20 years of financing
            experience and we can provide you with a lending solution that meets
            your needs.
          </p>
        </Grid>
        <Grid container justify="center" item xs={12}>
          <img src={sectionImage} alt="Industries Served" />
        </Grid>
      </Grid>
    </div>
  );
};

export default MobileLayout;
