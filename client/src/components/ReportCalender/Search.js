import React, { useEffect, useState } from "react";
import moment from "moment";

const Search = ({ calendarValue }) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Reset prev dates
    setDates([]);

    const d = [];

    for (let i = 0; i < calendarValue.length; i++) {
      const s = calendarValue[i].toString().split(" ");
      d.push(`${s[2]}/${months(s[1])}/${s[3]}`);
    }

    console.log(d);
  }, [calendarValue]);

  return (
    <div>
      <button>search</button>
    </div>
  );
};

const months = (month) => {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  for (const [key, value] of Object.entries(months)) {
    if (key === month) {
      return value;
    }
  }
};

export default Search;
