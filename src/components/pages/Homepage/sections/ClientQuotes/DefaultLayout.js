import React from "react";
import classnames from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import QuoteIcon from "@material-ui/icons/FormatQuote";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

const leftSide = <AccentIcon type={IconTypes.LINE} cssClass="quotes-section" />;

const Quote = ({ setFade, fade, visible, picture, ...props }) => (
  <Grid item xs={4}>
    <VisibilitySensor partialVisibility minTopValue={100} onChange={setFade}>
      <div className={classnames("pic", picture, { fade, visible })}>
        <QuoteContent {...props} />
      </div>
    </VisibilitySensor>
  </Grid>
);

const QuoteContent = ({ name, subtext, quote, prev, next }) => (
  <div className="quote-container">
    <Paper elevation={3} className="content">
      <i>
        <QuoteIcon />
      </i>
      <Typography variant="h6">{name}</Typography>
      <span>{subtext}</span>
      <p>{quote}</p>
    </Paper>
    <div className="buttons">
      <Button className="prev" onClick={() => prev()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button className="next" onClick={() => next()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  </div>
);

const DefaultLayout = ({ data, ...props }) => {
  return (
    <WithLayout leftSide={leftSide}>
      <section className="quotes-section">
        <Grid container spacing={10}>
          <Quote {...data} {...props} />
          <Grid item xs={8}>
            <Typography variant="h3">
              What our
              <br />
              customers are saying
            </Typography>
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default DefaultLayout;
