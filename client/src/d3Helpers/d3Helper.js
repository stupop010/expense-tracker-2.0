import categories from "../categories";
import moment from "moment";

export const pieDataHelper = (expenses) => {
  const data = [];
  categories.map((i) => data.push({ category: i, value: 0 }));
  for (let i = 0; i < expenses.length; i++) {
    for (let y = 0; y < data.length; y++) {
      if (expenses[i].category === data[y].category) {
        data[y].value += +expenses[i].price;
      }
    }
  }
  return data.filter((d) => d.value !== 0);
};

export const barDataHelper = (expenses) => {
  const data = [];
  months.map((i) => data.push({ month: i, value: 0 }));

  for (let i = 0; i < expenses.length; i++) {
    const dateFormat = moment(expenses[i].createdAt).format("MMM");
    for (let y = 0; y < data.length; y++) {
      if (dateFormat === data[y].month) {
        data[y].value += +expenses[i].price;
      }
    }
  }

  return data;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Set",
  "Oct",
  "Nov",
  "Dec",
];
