import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

const quotes = [
  {
    name: "Ashley H.",
    subtext: "Founder and CEO, Fresh Market Foods",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture: "pic1",
  },
  {
    name: "Brian and Sara W.",
    subtext: "Owners of Gourmet Pet Treats",
    quote: "We give them 10 out of 10 stars!",
    picture: "pic2",
  },
  {
    name: "Jay S.",
    subtext: "Creative Marketing Director, RGB Media",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    picture: "pic3",
  },
];

const ClientQuotes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selected, setQuote] = useState(0);
  const [fade, setFade] = useState(false);
  const [visible, setVisibility] = useState(false);

  const prev = () => {
    if (visible) {
      setQuote(selected === 0 ? quotes.length - 1 : selected - 1);
      setFade(true);
      setVisibility(false);
    }
  };

  const next = () => {
    if (visible) {
      setQuote(selected === quotes.length - 1 ? 0 : selected + 1);
      setFade(true);
      setVisibility(false);
    }
  };

  // handles applying fade and visibility classes
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade(false);
      setVisibility(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [fade]);

  // handles auto progression of quotes
  useEffect(() => {
    let timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  });

  return isMobile ? (
    <MobileLayout
      data={quotes[selected]}
      visible={visible}
      fade={fade}
      setFade={setFade}
      prev={prev}
      next={next}
    />
  ) : (
    <DefaultLayout
      data={quotes[selected]}
      visible={visible}
      fade={fade}
      setFade={setFade}
      prev={prev}
      next={next}
    />
  );
};

export default ClientQuotes;
