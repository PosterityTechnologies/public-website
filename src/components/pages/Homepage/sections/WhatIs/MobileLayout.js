import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const MobileLayout = () => {
  return (
    <div className="mobile-section">
      <Grid container direction="column">
        <Grid item xs>
          <Typography variant="h3">What Is Invoice Factoring?</Typography>
        </Grid>
        <Grid item xs>
          <p>
            Invoice factoring is a financing solution that allows you to sell
            your unpaid invoices to a third-party for cash. Your credit score
            will not be impacted using this type of financing because it is a
            sale instead of a traditional bank loan.
          </p>
          <p>
            Instead of waiting for a customer to pay an invoice, funds would be
            available in your bank account in a as little as 24 hours. You get
            quick access to cash without taking out a line of credit or a loan.
          </p>
        </Grid>
        <Grid container justify="center" item xs>
          <div className="whatis-section-image"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MobileLayout;
