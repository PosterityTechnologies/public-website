import React from "react";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

// images
import sectionImage from "images/pages/Services/section-pic.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    title: "Idea and Planning",
    subtitle: "Get your idea on paper",
    description:
      "We will work with you to transform your idea through planning",
    icon: <FontAwesomeIcon icon={faHandHoldingUsd} />,
  },
  {
    title: "Design and Develop",
    subtitle: "Get your idea off the ground",
    description: "We begin the process of creating the app components",
    icon: <FontAwesomeIcon icon={faCalendarAlt} />,
  },
  {
    title: "Go live",
    subtitle: "Make your web app public",
    description:
      "This is the final stage where your app is released into the wild!",
    icon: <FontAwesomeIcon icon={faCheck} />,
  },
];

const leftSide = (
  <div className="accent-left">
    <AccentIcon type={IconTypes.DOTS} cssClass="icon1" />
    <AccentIcon type={IconTypes.LINE} cssClass="icon2" />
  </div>
);

const rightSide = (
  <div className="accent-right">
    <AccentIcon type={IconTypes.SQUARE} cssClass="icon1" />
    <AccentIcon type={IconTypes.CIRCLES} cssClass="icon2" />
  </div>
);

const SectionContent = ({ title, subtitle, description }) => (
  <Grid item xs={8}>
    <div className="section-content">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">{subtitle}</Typography>
      <Typography variant="subtitle1" component="p">
        {description}
      </Typography>
    </div>
  </Grid>
);

const SectionIcon = ({ icon, className }) => (
  <Grid item xs={4}>
    <i className={classnames("section-icon", className)}>{icon}</i>
  </Grid>
);

const SectionItem = ({ order, icon, ...content }) => {
  return (
    <Grid container item alignItems="center" className="section-item">
      {!order ? (
        <SectionIcon icon={icon} className="left" />
      ) : (
        <SectionContent {...content} />
      )}
      {order ? (
        <SectionIcon icon={icon} className="right" />
      ) : (
        <SectionContent {...content} />
      )}
    </Grid>
  );
};

const PageContent = () => {
  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="main-section">
        <Grid container>
          <Grid item xs={12}>
            <header>
              <Typography variant="h1">Services</Typography>
            </header>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              component="p"
              className="summary"
            ></Typography>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              {items.map((item, k) => (
                <SectionItem key={k} {...item} order={!!(k % 2)} />
              ))}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" className="summary">
              We work with individuals and organizations spanning a variety of
              industries across the United States. Our team has over 15 years of
              software development and web application experience and we can
              provide you with a solution that meets your needs.
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              <img
                src={sectionImage}
                alt="Industries Served"
                className="section-image"
              />
            </Grid>
            <Grid container justify="center" item xs={6}>
              <div className="icons-container">
                <div className="pic pic5"></div>
                <div className="pic pic3"></div>
                <div className="pic pic6"></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
