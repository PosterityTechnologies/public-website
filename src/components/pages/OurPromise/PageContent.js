import React from "react";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

import { data } from "components/pages/Homepage/sections/Values";

const leftSide = (
  <div className="accent-left">
    <AccentIcon type={IconTypes.LINE} cssClass="icon1" />
    <AccentIcon type={IconTypes.CIRCLES} cssClass="icon2" />
  </div>
);

const rightSide = (
  <div className="accent-right">
    <AccentIcon type={IconTypes.SQUARE} cssClass="icon1" />
    <AccentIcon type={IconTypes.DOTS} cssClass="icon2" />
  </div>
);

const ValueItem = ({ title, description, image }) => (
  <Grid container className="value-item">
    <Grid item xs={12}>
      <Typography variant="h4">{title}</Typography>
    </Grid>
    <Grid item xs={12}>
      <div className={classnames("item-content", image)}>
        <div className="pic"></div>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </div>
    </Grid>
    <Grid container justify="center" item xs={12}>
      <div className="divider"></div>
    </Grid>
  </Grid>
);

const PageContent = () => {
  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="main-section">
        <Grid container>
          <Grid item xs={12}>
            <header>
              <Typography variant="h1">Our Promise</Typography>
            </header>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              component="p"
              className="summary"
            ></Typography>
          </Grid>
          <Grid item xs={12}>
            {data.map((item, k) => (
              <ValueItem key={k} {...item} />
            ))}
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
