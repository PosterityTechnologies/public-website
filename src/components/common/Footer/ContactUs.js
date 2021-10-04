import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "components/common/Logo";
import StyledIcon, { TYPES as IconTypes } from "./StyledIcon";
import ContactUsForm from "./ContactUsForm";

const ContactUs = ({ hideForm }) => (
  <Grid container spacing={10}>
    <Grid item xs={6}>
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
            {/* <div>
              <a href="/">
                <StyledIcon type={IconTypes.Phone} />
                <div>(000) 000 - 0000</div>
              </a>
            </div> */}
            <div>
              <a href="/">
                <StyledIcon type={IconTypes.Email} />
                <div>Posterity.Technologies@gmail.com</div>
              </a>
            </div>
            <div>
              <StyledIcon type={IconTypes.Location} />
              <div>5501 Merchants View Sq, Suite 175, Haymarket, VA 20169</div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
    <Grid item xs={6}>
      {!hideForm && <ContactUsForm />}
    </Grid>
  </Grid>
);

export default ContactUs;
