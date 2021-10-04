import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

export const data = [
  {
    title: "Value",
    description:
      "We believe in fully understanding your needs so you get the most meaningful value from our services.",
    image: "item1",
    svgLine: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="line"
      >
        <path
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10,10"
          d="
          M 0,96
          L 60,133.3
          C 120,171,240,245,360,245.3
          C 480,245,600,171,720,117.3"
        ></path>
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We keep our communication channels and our business practices open and honest.",
    image: "item2",
    svgLine: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="line"
      >
        <path
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10,10"
          d="
          M 0,96
          L 26.7,112
          C 53.3,128,107,160,160,154.7
          C 213.3,149,267,107,320,122.7
          C 373.3,139,427,213,480,218.7
          C 533.3,224,587,160,640,149.3
          C 693.3,139,747,181,800,186.7"
        ></path>
      </svg>
    ),
  },
  {
    title: "Committment",
    description:
      "We are passionate about enabling organizations to succeed and are committed to providing you value.",
    image: "item3",
    svgLine: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="line"
      >
        <path
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10,10"
          d="
          M 0,32
          L 18.5,48
          C 36.9,64,74,96,111,101.3
          C 147.7,107,185,85,222,90.7
          C 258.5,96,295,128,332,160
          C 369.2,192,406,224,443,234.7
          C 480,245,517,235,554,218.7
          C 590.8,203,628,181,665,170.7
          C 701.5,160,738,160,775,181.3"
        ></path>
      </svg>
    ),
  },
];

const leftSide = (
  <AccentIcon type={IconTypes.CIRCLES} cssClass="values-section" />
);

const rightSide = (
  <AccentIcon type={IconTypes.DOTS} cssClass="values-section" />
);

const ValuesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const timer = useRef();

  const [currentValue, setValue] = useState(0);

  const clearTimer = () => clearInterval(timer.current);

  const delay = isMobile ? 6000 : 4000;

  // handles auto progression
  useEffect(() => {
    timer.current = setInterval(() => {
      if (currentValue < 2) setValue(currentValue + 1);
      else setValue(0);
    }, delay);
    return clearTimer;
  }, [currentValue, delay]);

  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="values-section">
        {isMobile ? (
          <MobileLayout data={data} currentValue={currentValue} />
        ) : (
          <DefaultLayout data={data} currentValue={currentValue} />
        )}
      </section>
    </WithLayout>
  );
};

export default ValuesSection;
