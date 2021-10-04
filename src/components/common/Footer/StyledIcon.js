import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TYPES = {
  Facebook: "facebook",
  Twitter: "twitter",
  LinkedIn: "linkedin",
  Phone: "phone",
  Email: "email",
  Location: "location",
};

const ICONS = {
  [TYPES.Facebook]: faFacebookF,
  [TYPES.Twitter]: faTwitter,
  [TYPES.LinkedIn]: faLinkedinIn,
  [TYPES.Phone]: faPhoneAlt,
  [TYPES.Email]: faEnvelope,
  [TYPES.Location]: faMapMarkerAlt,
};

const StyledIcon = ({ type }) => (
  <i className="styled-icon">
    <FontAwesomeIcon icon={ICONS[type]} />
  </i>
);

export default StyledIcon;
