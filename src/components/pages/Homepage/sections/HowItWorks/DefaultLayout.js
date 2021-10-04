import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SectionItem from "./SectionItem";

const DefaultLayout = ({ data }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} className="section-header">
        <Typography variant="h3">How It Works</Typography>
      </Grid>
      <Grid container item xs={12}>
        {data.map((item, i) => (
          <SectionItem key={i} {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
