import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WithLayout from "components/common/WithLayout";

const DAYS = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

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

const getSiteMapItems = (data) => {
  let d = [...data];
  d.pop();
  return d;
};

const getHoursOperation = (data) => {
  let parts = data.name.split(",");
  let day = parts[0];
  let hours = parts[1];

  data.markup = (
    <div className="hours">
      <div>{DAYS[day]}:</div>
      <div>
        {hours !== "Closed"
          ? hours
              .replace(/M/g, "")
              .replace(/ /g, "")
              .replace("-", " - ")
              .toLowerCase()
          : hours}
      </div>
    </div>
  );

  return data;
};

const SiteMapMobile = ({ data }) => {
  return (
    <WithLayout>
      <Grid container spacing={6} className="sitemap">
        <Grid container direction="column" item xs={6}>
          {getSiteMapItems(data).map(({ title, items }, i) => (
            <Grid key={i} item xs={12}>
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
        <Grid item xs={6}>
          <div>
            <Typography variant="h6">{data[3].title}</Typography>
            <ul>
              {data[3].items.map((item, k) => (
                <SiteMapItem key={k} {...getHoursOperation(item)} />
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </WithLayout>
  );
};

export default SiteMapMobile;
