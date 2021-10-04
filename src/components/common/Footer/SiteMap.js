import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SiteMapItem = ({ name, url, markup }) => {
  return (
    <li>
      {url ? (
        <a href={url} alt={name}>
          {name}
        </a>
      ) : (
        <div>{markup || name}</div>
      )}
    </li>
  );
};

const formatData = (data) => {
  let d = [...data];

  // Hours of Operation
  d[3].items = [
    {
      markup: (
        <div className="hours-list">
          <p>24 hours a day.</p>
          <p>7 days a week.</p>
          <p>365 days a year.</p>
        </div>
      ),
    },
  ];
  //  d[3].items.map((item) => {
  //   let parts = item.name.split(",");
  //   let day = parts[0];
  //   let hours = parts[1];

  //   item.markup = (
  //     <div className="hours">
  //       <div>{day}:</div>
  //       <div>{hours}</div>
  //     </div>
  //   );
  //   return item;
  // });

  return d;
};

const SiteMap = ({ data }) => (
  <Grid container className="sitemap">
    {formatData(data).map(({ title, items }, i) => (
      <Grid key={i} item xs={3}>
        <div>
          <Typography variant="h6">{title}</Typography>
          <ul>
            {items.map((item, k) => (
              <SiteMapItem key={k} {...item} />
            ))}
          </ul>
        </div>
      </Grid>
    ))}
  </Grid>
);

export default SiteMap;
