import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import WithLayout from "../WithLayout";
import Logo from "../Logo";
import DefaultNav from "./DefaultNav";
import MobileNav from "./MobileNav";

const navLinks = [
  { title: "How It Works", url: "/howitworks" },
  { title: "Services", url: "/services" },
  // { title: "Resources", url: "/resources" },
  { title: "Our Promise", url: "/promise" },
  { title: "Apply", url: "/apply" },
];

const TopNav = () => (
  <WithLayout className="topNav">
    <AppBar className="navBar" position="static">
      <Toolbar disableGutters>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Link to="/">
              <Logo />
            </Link>
          </Grid>
          <Grid container alignItems="center" item xs={8}>
            <Hidden smDown>
              <DefaultNav navLinks={navLinks} />
            </Hidden>
            <Hidden mdUp>
              <MobileNav navLinks={navLinks} />
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </WithLayout>
);

export default TopNav;
