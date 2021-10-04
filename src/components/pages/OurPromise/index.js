import React from "react";
import Grid from "@material-ui/core/Grid";
import TopNav from "components/common/TopNav";
import Footer from "components/common/Footer";
import PageContent from "./PageContent";

import "styles/components/pages/OurPromise/index.scss";

const OurPromise = () => {
  return (
    <Grid container className="ourpromise-page">
      <Grid item xs={12}>
        <TopNav />
      </Grid>
      <Grid item xs={12} className="content-container">
        <PageContent />
      </Grid>
      <Grid item xs={12} className="footer-container">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default OurPromise;
