import React from "react";
import Grid from "@material-ui/core/Grid";
import ContactUs from "./ContactUs";
import SiteMap from "./SiteMap";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

const leftSide = (
  <div>
    <AccentIcon type={IconTypes.DOTS} cssClass="footer-section" />
    <AccentIcon type={IconTypes.SQUARE} cssClass="footer-section" />
  </div>
);

const rightSide = (
  <AccentIcon type={IconTypes.CIRCLES} cssClass="footer-section" />
);

const DefaultLayout = ({ data, ...props }) => {
  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="footer-section">
        <Grid container>
          <Grid item xs={12}>
            <ContactUs hideForm={props.hideForm} />
          </Grid>
          <Grid item xs={12}>
            <div className="divider"></div>
          </Grid>
          <Grid item xs={12}>
            <SiteMap data={data} />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <div className="copyright">
              &copy; 2021 Posterity Technologies, LLC. All rights reserved.
            </div>
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default DefaultLayout;
