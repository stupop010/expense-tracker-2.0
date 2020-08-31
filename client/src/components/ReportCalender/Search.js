import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./reportCalenderStyles";

const Search = ({ calendarValue, search }) => {
  const classes = useStyles();

  const dateOne = new Date(calendarValue[0]).toLocaleDateString();
  const dateTwo = new Date(calendarValue[1]).toLocaleDateString();
  const searchOptions = dateTwo.includes("Invalid Date")
    ? dateOne
    : [dateOne, dateTwo].join(" - ");

  return (
    <div className={classes.search}>
      <button onClick={() => search(searchOptions, calendarValue)}>
        Search
      </button>
      <div>
        {calendarValue.length === 1 && <span>{dateOne}</span>}
        {calendarValue.length === 2 && (
          <>
            <span>{dateOne}</span> - <span>{dateTwo}</span>
          </>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  calendarValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
};

export default Search;
