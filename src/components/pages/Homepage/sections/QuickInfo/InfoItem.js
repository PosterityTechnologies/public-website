import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const InfoItem = ({ title, subtitle, description, icon: Icon, isMobile }) => (
  <Grid
    container
    item
    xs={isMobile ? 12 : 4}
    direction="column"
    alignItems="center"
    className="info-item"
  >
    <Grid item className="item-title">
      {title}
    </Grid>
    <Grid item className="item-icon">
      <Icon />
    </Grid>
    <Grid item>
      <Typography variant="h6">{subtitle}</Typography>
    </Grid>
    <Grid item>
      <p>{description}</p>
    </Grid>
  </Grid>
);

export default InfoItem;
