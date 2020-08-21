import React from "react";

import { useStyles } from "./reportCalenderStyles";

const Search = ({ calendarValue, search }) => {
  const classes = useStyles();

  const dateOne = new Date(calendarValue[0]).toLocaleDateString();

  const dateTwo = new Date(calendarValue[1]).toLocaleDateString();

  return (
    <div className={classes.search}>
      <button onClick={() => search(calendarValue)}>Search</button>
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

export default Search;
