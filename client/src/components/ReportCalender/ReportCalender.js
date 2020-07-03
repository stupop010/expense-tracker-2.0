import React, { useState, useRef } from "react";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import { useStyles, Btn } from "./reportCalenderStyles";

const CalenderData = () => {
  const [dates, setDates] = useState("TODAY");

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleDatesChange = (e) => {
    setDates(e.target.attributes.getNamedItem("data-value").value);
  };

  return (
    <div>
      <Btn
        disableRipple
        startIcon={<DateRangeOutlinedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {dates}
      </Btn>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List className={classes.popoverBg}>
          <ListItem button onClick={handleDatesChange} data-value="Today">
            Today
          </ListItem>
          <ListItem button onClick={handleDatesChange} data-value="Yesterday">
            Yesterday
          </ListItem>
          <ListItem button onClick={handleDatesChange} data-value="Last Month">
            Last Month
          </ListItem>
          <ListItem>Custom Dates</ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default CalenderData;
