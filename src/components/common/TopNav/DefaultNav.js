import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const DefaultNav = ({ navLinks }) => (
  <nav className="navLinks">
    <ol>
      {navLinks.map((link, i) => {
        return (
          <li key={i}>
            <Link
              className={classnames(link.title === "Apply" && "btnApply")}
              to={link.url}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ol>
  </nav>
);

export default DefaultNav;
