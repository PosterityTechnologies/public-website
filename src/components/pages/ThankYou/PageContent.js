import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

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

const PageContent = () => {
  // redirect
  React.useEffect(() => {
    window.setTimeout(() => {
      window.location.href = "/";
    }, 6000);
  });

  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="main-section">
        <Grid container>
          <Grid item xs={12}>
            <header>
              <Typography variant="h1">
                Thank you for your submission!
              </Typography>
            </header>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="div" className="summary">
              <p>
                You will be redirected to the homepage shortly. If you are not
                redirected, please{" "}
                <a href="/" alt="">
                  click here
                </a>
              </p>
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </Typography>
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
