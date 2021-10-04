import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

const items = [
  {
    title: "Apply online",
    description: "Use our online form to submit an application!",
    icon: () => <div className="pic pic1"></div>,
  },
  {
    title: "Speak with a developer",
    description:
      "One of our Application Developers will contact you and discuss how we can meet your needs.",
    icon: () => <div className="pic pic2"></div>,
  },
  {
    title: "Launch your app",
    description:
      "Once we plan out your idea and get the design and architecture in place, we'll be ready to build out your application and release it to the world.",
    icon: () => <div className="pic pic3"></div>,
  },
];

const leftSide = (
  <div className="accent-left">
    <AccentIcon type={IconTypes.SQUARE} cssClass="icon1" />
    <AccentIcon type={IconTypes.LINE} cssClass="icon2" />
  </div>
);

const rightSide = (
  <div className="accent-right">
    <AccentIcon type={IconTypes.CIRCLES} cssClass="icon1" />
    <AccentIcon type={IconTypes.DOTS} cssClass="icon2" />
  </div>
);

const SectionItem = ({ title, description, icon: Icon }) => (
  <Grid container alignItems="center" item xs={12} className="section-item">
    <Grid item xs={4}>
      <div className="left">
        <Icon />
      </div>
    </Grid>
    <Grid item xs={8}>
      <div className="right">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </div>
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
              <Typography variant="h1">How It Works</Typography>
            </header>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              component="p"
              className="summary"
            ></Typography>
          </Grid>
          <Grid container justify="center" alignItems="center" item>
            {items.map((item, k) => (
              <SectionItem key={k} {...item} />
            ))}
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
