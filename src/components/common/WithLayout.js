import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

const WithLayout = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container item zeroMinWidth className={props.className}>
      <Grid item xs={1} lg={2} xl={3}>
        {!isMobile && props.leftSide}
      </Grid>
      <Grid item xs={10} lg={8} xl={6}>
        {children}
      </Grid>
      <Grid item xs={1} lg={2} xl={3}>
        {!isMobile && props.rightSide}
      </Grid>
    </Grid>
  );
};

export default WithLayout;
