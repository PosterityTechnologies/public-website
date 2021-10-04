import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const MobileNav = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobile-nav">
      <IconButton
        className="menu-icon"
        onClick={() => {
          setOpen(true);
        }}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className="mobile-nav"
        open={open}
        anchor="right"
        variant="temporary"
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          <ListItem disableGutters className="navItem">
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          {navLinks.map((link) => {
            return (
              <ListItem
                disableGutters
                className={classnames(
                  "navItem",
                  link.title === "Apply" && "btnApply"
                )}
              >
                <Link to={link.url}>
                  <ListItemText primary={link.title} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </nav>
  );
};

export default MobileNav;
