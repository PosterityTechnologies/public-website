import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

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
  <AccentIcon type={IconTypes.DOTS} cssClass="how-it-works-section" />
);

const rightSide = (
  <AccentIcon type={IconTypes.CIRCLES} cssClass="how-it-works-section" />
);

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WithLayout
      className="section-bg"
      leftSide={leftSide}
      rightSide={rightSide}
    >
      <section className="how-it-works-section">
        {isMobile ? (
          <MobileLayout data={items} />
        ) : (
          <DefaultLayout data={items} />
        )}
      </section>
    </WithLayout>
  );
};

export default HowItWorks;
