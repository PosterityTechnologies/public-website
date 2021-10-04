import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  content: {
    padding: 0,
    paddingBottom: "inherit !important",
  },
});

const ValueItem = ({ selected, order, title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classnames("card", { selected })}>
      <CardContent className={classes.content}>
        <div className={classnames("pic", `pic${order}`)}>
          <div className="image"></div>
        </div>
        <div className="item-content">
          <Typography variant="h4">{title}</Typography>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const MobileLayout = ({ data, currentValue }) => {
  return (
    <div className="mobile-section">
      <Typography variant="h3">Our Values</Typography>
      <div className="card-container">
        {data.map((item, i) => (
          <ValueItem order={i + 1} selected={i === currentValue} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MobileLayout;
