import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  font1: {
    "& span": {
      fontFamily: '"Red Hat Display", serif',
    },
  },
  font2: {
    "& span": {
      fontFamily: "Roboto, serif",
    },
  },
  font3: {
    "& span": {
      fontFamily: "Quicksand, serif",
    },
  },
  font4: {
    "& span": {
      fontFamily: "Archivo, serif",
    },
  },
  font5: {
    "& span": {
      fontFamily: "Lato, serif",
    },
  },
  font6: {
    "& span": {
      fontFamily: "Chivo, serif",
    },
  },
  font7: {
    "& span": {
      fontFamily: "Mulish, serif",
    },
  },
  font8: {
    "& span": {
      fontFamily: "Cairo, serif",
    },
  },
  font9: {
    "& span": {
      fontFamily: "Spectral, serif",
    },
  },
  font10: {
    "& span": {
      fontFamily: "Rubik, serif",
    },
  },
  button: {
    fontWeight: "bold !important",
    backgroundColor: "#00E4FF",
    padding: "10px 20px",
  },
  popout: {
    position: "absolute",
    top: 50,
    left: -83,
    border: "1px solid black",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    zIndex: 9999,
  },
  root: {
    position: "absolute",
    zIndex: 9999,
    right: "60px",
    top: "20px",
  },
}));

const FontChanger = ({ font, changeFont }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const setFont = (event) => {
    changeFont(parseInt(event.target.value));
  };

  const fonts = [
    { label: "Red Hat Display", className: classes.font1 },
    { label: "Roboto", className: classes.font2 },
    { label: "Quicksand", className: classes.font3 },
    { label: "Cairo", className: classes.font8 },
    { label: "Lato", className: classes.font5 },
    { label: "Chivo", className: classes.font6 },
    { label: "Mulish", className: classes.font7 },
    { label: "Archivo", className: classes.font4 },
    { label: "Spectral", className: classes.font9 },
    { label: "Rubik", className: classes.font10 },
  ];

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <Button
            className={classes.button}
            ref={anchorRef}
            onClick={handleToggle}
            variant="contained"
            color="primary"
            disableElevation
          >
            Change Font
          </Button>
          {open ? (
            <Paper className={classes.popout}>
              <MenuList id="font-menu">
                <FormControl components="fieldset">
                  <RadioGroup name="font" value={font} onChange={setFont}>
                    {fonts.map((item, i) => (
                      <MenuItem>
                        <FormControlLabel
                          value={i + 1}
                          control={<Radio color="primary" />}
                          label={item.label}
                          className={item.className}
                        />
                      </MenuItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </MenuList>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default FontChanger;
