import React from "react";
import Grid from "@material-ui/core/Grid";
import ContactUsMobile from "./ContactUsMobile";
import SiteMapMobile from "./SiteMapMobile";

const MobileLayout = ({ data }) => {
  return (
    <section className="footer-section mobile-section">
      <Grid container>
        <Grid item xs={12}>
          <ContactUsMobile />
        </Grid>
        <Grid item xs={12}>
          <SiteMapMobile data={data} />
        </Grid>
        <Grid container justify="center" item xs={12}>
          <div className="copyright">
            &copy; 2021 Posterity Technologies, LLC. All rights reserved.
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default MobileLayout;
