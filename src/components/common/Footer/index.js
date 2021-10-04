import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

const siteMapData = [
  {
    title: "Menu",
    items: [
      { name: "Services", url: "" },
      { name: "Programs", url: "" },
      { name: "Blog", url: "" },
      { name: "Our Promise", url: "" },
    ],
  },
  {
    title: "App Development",
    items: [
      { name: "How It Works", url: "" },
      { name: "Rates", url: "" },
      // { name: "Resources", url: "" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms of Service", url: "/terms" },
      { name: "Privacy Policy", url: "/privacy" },
    ],
  },
  {
    title: "Hours of Operation",
    items: [
      { name: "Monday,9 AM - 5 PM" },
      { name: "Tuesday,9 AM - 5 PM" },
      { name: "Wednesday,9 AM - 5 PM" },
      { name: "Thursday,9 AM - 5 PM" },
      { name: "Friday,9 AM - 5 PM" },
      { name: "Saturday,Closed" },
      { name: "Sunday,Closed" },
    ],
  },
];

const Footer = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <MobileLayout data={siteMapData} {...props} />
  ) : (
    <DefaultLayout data={siteMapData} {...props} />
  );
};

export default Footer;
