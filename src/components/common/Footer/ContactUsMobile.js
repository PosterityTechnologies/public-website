import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "components/common/Logo";
import WithLayout from "components/common/WithLayout";
import StyledIcon, { TYPES as IconTypes } from "./StyledIcon";
import ContactUsForm from "./ContactUsForm";

const ContentWithLayout = () => (
  <WithLayout>
    <div className="content">
      <div className="summary">
        <Logo />
      </div>
      {/* <div className="follow-us">
        <Typography variant="h6">Follow Us</Typography>
        <div>
          <StyledIcon type={IconTypes.Facebook} />
          <StyledIcon type={IconTypes.Twitter} />
          <StyledIcon type={IconTypes.LinkedIn} />
        </div>
      </div> */}
      <div className="contact-us">
        <Typography variant="h6">Contact Us</Typography>
        <div>
          <div>
            <a href="tel:877-901-2742">
              <StyledIcon type={IconTypes.Phone} />
              <div>000000000</div>
            </a>
          </div>
          <div>
            <a href="mailto:posterity.technologies@gmail.com">
              <StyledIcon type={IconTypes.Email} />
              <div>posterity.technologies@gmail.com</div>
            </a>
          </div>
          <div>
            <StyledIcon type={IconTypes.Location} />
            <div>Posterity Technologies</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  </WithLayout>
);

const ContactUsMobile = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContactUsForm />
      </Grid>
      <Grid container item xs={12}>
        <Grid item></Grid>
      </Grid>
      <Grid item xs={12}>
        <ContentWithLayout />
      </Grid>
    </Grid>
  );
};

export default ContactUsMobile;
