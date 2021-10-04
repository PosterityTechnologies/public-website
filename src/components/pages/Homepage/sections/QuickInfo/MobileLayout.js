import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoItem from "./InfoItem";

const MobileLayout = ({ data }) => {
  return (
    <div className="mobile-section">
      <Grid container direction="column">
        {data.map((item, i) => (
          <InfoItem key={i} isMobile={true} {...item} />
        ))}
      </Grid>
    </div>
  );
};

export default MobileLayout;
