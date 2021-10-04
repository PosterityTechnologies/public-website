import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoItem from "./InfoItem";

const DefaultLayout = ({ data }) => {
  return (
    <Grid container spacing={10}>
      {data.map((item, i) => (
        <InfoItem key={i} {...item} />
      ))}
    </Grid>
  );
};

export default DefaultLayout;
