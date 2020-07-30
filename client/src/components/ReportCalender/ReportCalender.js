import React, { useState, useRef } from "react";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Calendar from "react-calendar";
import moment from "moment";
import Search from "./Search";

import "react-calendar/dist/Calendar.css";

import { useStyles, Btn } from "./reportCalenderStyles";

const CalenderData = () => {
  const [dates, setDates] = useState("TODAY");
  const [calendarValue, setCalendarValue] = useState([]);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleDatesChange = (e) => {
    setDates(e.target.attributes.getNamedItem("data-value").value);
  };

  const toggleCalendar = () => {
    setOpenCalendar(!openCalendar);
    setAnchorEl(null);
  };

  const onDay = (value) => {
    setCalendarValue(value);
    // console.log(value);
  };

  return (
    <div className={classes.reportCalender}>
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
          <ListItem button onClick={toggleCalendar}>
            Custom Dates
          </ListItem>
        </List>
      </Popover>
      <div className={openCalendar ? classes.showCalendar : classes.notDisplay}>
        <div className={classes.calendar}>
          <div className={classes.closeIcon} onClick={toggleCalendar}>
            <CloseIcon />
          </div>
          <Calendar
            selectRange
            // defaultActiveStartDate={new Date()}
            allowPartialRange
            onChange={onDay}
            onClickDay={onDay}
          />
        </div>
        <div>
          <Search calendarValue={calendarValue} />
        </div>
      </div>
    </div>
  );
};

export default CalenderData;
