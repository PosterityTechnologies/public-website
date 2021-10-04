import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Homepage from "components/pages/Homepage";
import HowItWorks from "components/pages/HowItWorks";
import Services from "components/pages/Services";
import OurPromise from "components/pages/OurPromise";
import ApplyPage from "components/pages/Apply";
import ThankYouPage from "components/pages/ThankYou";
import TermsPage from "components/pages/Terms";
import PrivacyPage from "components/pages/Privacy";

// fonts and styles
import "styles/fonts.scss";
import "styles/index.scss";

const App = () => {
  const [width, setWidth] = useState(`${window.innerWidth}px`);
  const [height, setHeight] = useState(`${window.innerHeight}px`);

  useEffect(() => {
    const setDimensions = () => {
      setWidth(`${window.innerWidth}px`);
      setHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", setDimensions);

    return () => window.removeEventListener("resize", setDimensions);
  }, [width, height]);

  return (
    <div className="app" style={{ width, height }}>
      <Switch>
        <Route exact path="/howitworks">
          <HowItWorks />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/promise">
          <OurPromise />
        </Route>
        <Route exact path="/apply">
          <ApplyPage />
        </Route>
        <Route exact path="/thankyou">
          <ThankYouPage />
        </Route>
        <Route exact path="/terms">
          <TermsPage />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
