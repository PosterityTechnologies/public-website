import React from "react";
import classnames from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import QuoteIcon from "@material-ui/icons/FormatQuote";

const Quote = ({
  below500,
  setFade,
  fade,
  visible,
  picture,
  name,
  subtext,
  quote,
}) => (
  <VisibilitySensor partialVisibility minTopValue={100} onChange={setFade}>
    <div className={classnames("container", { fade, visible, below500 })}>
      <div className="pic-container">
        <div className={classnames("pic", picture)}></div>
      </div>
      <Paper className="content">
        <Typography variant="h6">{name}</Typography>
        <span>{subtext}</span>
        <p>
          <i>
            <QuoteIcon />
          </i>
          {quote}
        </p>
      </Paper>
    </div>
  </VisibilitySensor>
);

const MobileLayout = ({ data, prev, next, ...props }) => {
  const theme = useTheme();
  const below500 = useMediaQuery(theme.breakpoints.down(500));

  return (
    <section className="quotes-section mobile-section">
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Typography variant="h3">What our customers are saying</Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={12}>
          <Quote below500={below500} {...data} {...props} />
        </Grid>
        <Grid item xs={12}>
          <div className="buttons">
            <Button className="prev" onClick={() => prev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button className="next" onClick={() => next()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default MobileLayout;
