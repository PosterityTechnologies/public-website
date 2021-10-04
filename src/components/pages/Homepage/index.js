import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";

// components
import TopNav from "components/common/TopNav";
import Footer from "components/common/Footer";
import HeroSection from "./sections/Hero";
import ValuesSection from "./sections/Values";
import WhatIsSection from "./sections/WhatIs";
import QuickInfo from "./sections/QuickInfo";
import HowItWorks from "./sections/HowItWorks";
// import ClientQuotes from "./sections/ClientQuotes";
import IndustriesServed from "./sections/IndustriesServed";

import "styles/components/pages/Homepage/index.scss";

const Homepage = () => {
  return (
    <Grid container direction="column" className="homepage">
      <Grid item style={{ position: "relative" }}>
        <TopNav />
      </Grid>
      <Grid item>
        <HeroSection />
      </Grid>
      <Grid item>
        <ValuesSection />
      </Grid>
      <Grid item>
        <WhatIsSection />
      </Grid>
      <Grid item>
        <QuickInfo />
      </Grid>
      <Grid item>
        <HowItWorks />
      </Grid>
      {/* <Grid item>
        <ClientQuotes />
      </Grid> */}
      <Grid item>
        <IndustriesServed />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Homepage;
