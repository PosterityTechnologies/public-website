import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SectionItem = ({ title, description, icon: Icon, isMobile }) => (
  <Grid item xs={isMobile ? 12 : 4}>
    <div className="section-item">
      <Icon />
      <Typography variant="h6">{title}</Typography>
      <p>{description}</p>
      {isMobile && <i />}
    </div>
  </Grid>
);

export default SectionItem;
