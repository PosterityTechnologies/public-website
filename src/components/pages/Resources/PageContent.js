import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

import { ItemLink, TYPES as ResourceTypes } from "./ResourceLinks";

const data = [
  { title: "Invoice Factoring Guide", source: "#", type: ResourceTypes.PDF },
  {
    title: "Official Committment of Value Statement",
    source: "#",
    type: ResourceTypes.FILE,
  },
  {
    title: "Top 10 ways Invoice Factoring can help you",
    source: "#",
    type: ResourceTypes.WORD,
  },
  { title: "Financing 101", source: "#", type: ResourceTypes.PDF },
  {
    title: "How to succeed during a pandemic",
    source: "#",
    type: ResourceTypes.LINK,
  },
  {
    title: "What to look for in an Invoice Factoring company",
    source: "#",
    type: ResourceTypes.FILE,
  },
  {
    title: "Investment Strategies",
    source: "#",
    type: ResourceTypes.WORD,
  },
  {
    title: "Budgeting, Saving, and Profit",
    source: "#",
    type: ResourceTypes.LINK,
  },
];

const leftSide = (
  <div className="accent-left">
    <AccentIcon type={IconTypes.CIRCLES} cssClass="icon1" />
    <AccentIcon type={IconTypes.SQUARE} cssClass="icon2" />
  </div>
);

const rightSide = (
  <div className="accent-right">
    <AccentIcon type={IconTypes.LINE} cssClass="icon1" />
  </div>
);

const PageContent = () => {
  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="main-section">
        <Grid container>
          <Grid item xs={12}>
            <header>
              <Typography variant="h1">Resources</Typography>
            </header>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" className="summary">
              [Summary Placeholder]
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Documents</Typography>
            {data
              .filter((item) => item.type !== ResourceTypes.LINK)
              .map((item, k) => (
                <ItemLink key={k} {...item} />
              ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Blog</Typography>
            {data
              .filter((item) => item.type === ResourceTypes.LINK)
              .map((item, k) => (
                <ItemLink key={k} {...item} />
              ))}
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
