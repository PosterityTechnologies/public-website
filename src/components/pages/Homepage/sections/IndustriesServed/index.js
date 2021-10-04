import React from "react";
import classnames from "classnames";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

const rightSide = (
  <div>
    <AccentIcon type={IconTypes.DOTS} cssClass="industries-section" />
    <AccentIcon type={IconTypes.CIRCLES} cssClass="industries-section" />
  </div>
);

const IndustriesServed = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WithLayout
      className={classnames(/*"section-bg",*/ !isMobile && "margin-bottom-270")}
      rightSide={rightSide}
    >
      <section className="industries-section">
        {isMobile ? <MobileLayout /> : <DefaultLayout />}
      </section>
    </WithLayout>
  );
};

export default IndustriesServed;
