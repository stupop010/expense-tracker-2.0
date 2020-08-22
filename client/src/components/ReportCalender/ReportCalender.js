import React, { useState, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";

import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { ExpenseContext } from "../../context/expenseContext/ExpenseState";
import { SEARCH_DATES, SEARCH_DATE } from "../../graphQL/querys";

import Search from "./Search";

import { useStyles, Btn } from "./reportCalenderStyles";

const CalenderData = () => {
  const [dates, setDates] = useState("TODAY");
  const [calendarValue, setCalendarValue] = useState([]);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const { fetchExpenses } = useContext(ExpenseContext);

  const [getSearchDates, { loading, data }] = useLazyQuery(SEARCH_DATES, {
    partialRefetch: true,
    onCompleted: ({ searchDates }) => {
      fetchExpenses(searchDates);

      if (openCalendar) toggleCalendar();
    },
  });

  const handleDatesChange = (e) => {
    const date = e.target.attributes.getNamedItem("data-value").value;
    setDates(date);
    getSearchDates({
      variables: {
        dates: date,
      },
    });
  };

  const toggleCalendar = () => {
    setOpenCalendar(!openCalendar);
    setAnchorEl(null);
  };

  const onDay = (value) => {
    setCalendarValue(value);
  };

  const search = (setDate, searchDates) => {
    setDates(setDate);
    getSearchDates({
      variables: { dates: searchDates.toString() },
    });
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
            allowPartialRange
            onChange={onDay}
            onClickDay={onDay}
            maxDate={new Date()}
          />
        </div>
        <div>
          <Search calendarValue={calendarValue} search={search} />
        </div>
      </div>
    </div>
  );
};

export default CalenderData;
