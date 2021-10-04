import React from "react";
import classnames from "classnames";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import PhoneIcon from "@material-ui/icons/Phone";
import WithLayout from "components/common/WithLayout";
import heroText from "images/pages/Homepage/hero-text.png";

const HeroText = () => (
  <div className="hero-text">
    <p>
      <div>Creating Tailored</div>
      <div className="highlight">Web Application</div>
      <div>Solutions For You</div>
    </p>
  </div>
);

const ApplyButton = () => (
  <div className="btnApply">
    <Link href="/apply">Contact Us Today</Link>
  </div>
);

const HeroBody = () => (
  <WithLayout>
    <div className="hero-body">
      <Grid container direction="column">
        <Grid item xs>
          <HeroText />
        </Grid>
        <Grid item xs>
          <ApplyButton />
        </Grid>
      </Grid>
    </div>
  </WithLayout>
);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobile600 = useMediaQuery(theme.breakpoints.down(600));

  return (
    <section
      className={classnames("hero-section", {
        mobile: isMobile,
        mobile600,
      })}
    >
      <div className="hero-image">
        <HeroBody />
      </div>
    </section>
  );
};

export default HeroSection;
