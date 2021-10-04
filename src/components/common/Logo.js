import React from "react";
import classnames from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logoImg from "images/common/logo.png";

const useStyles = makeStyles((theme) => ({
  logoContainer: { ...theme.mixins.toolbar },
}));

const Logo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      className={classnames("logo", classes.logoContainer, {
        mobile: isMobile,
      })}
    >
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;
