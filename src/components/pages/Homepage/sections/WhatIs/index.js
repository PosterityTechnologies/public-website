import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

const rightSide = (
  <AccentIcon type={IconTypes.LINE} cssClass="whatis-section" />
);

const WhatIs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WithLayout className="section-bg" rightSide={rightSide}>
      <section className="whatis-section">
        {isMobile ? <MobileLayout /> : <DefaultLayout />}
      </section>
    </WithLayout>
  );
};

export default WhatIs;
