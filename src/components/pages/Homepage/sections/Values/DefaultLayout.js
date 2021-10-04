import React from "react";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";

const ValueImage = ({ order, selected, image, svgLine }) => (
  <div className={classnames("pic", image, { selected })}>
    <div className="image"></div>
    <div className="image-shadow"></div>
    {/* {svgLine} */}
  </div>
);

const ValueItem = ({ selected, order, title, description }) => (
  <li>
    <div className={classnames({ "dotted-line": order < 3 })}>
      <div className={classnames("circle", { selected })}>{order}</div>
    </div>
    <div className="item-content">
      <Typography variant="h4">{title}</Typography>
      <p>{description}</p>
    </div>
  </li>
);

const DefaultLayout = ({ data, currentValue }) => {
  return (
    <div className="values-container">
      <div className="left">
        <div className="values-images">
          {data.map((item, i) => (
            <ValueImage
              key={i}
              order={i + 1}
              selected={i === currentValue}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className="right">
        <div>
          <Typography variant="h3">Our Values</Typography>
        </div>
        <ol>
          {data.map((item, i) => (
            <ValueItem
              key={i}
              order={i + 1}
              selected={i === currentValue}
              {...item}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DefaultLayout;
