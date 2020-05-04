import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useLocation, Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import PaginationActions from "./PaginationActions";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";
import useStyles from "./ExpenseTableStyles";

const FETCH_EXPENSES = gql`
  query fetchExpenses {
    findAllExpenses {
      name
      price
      desc
      category
    }
  }
`;

export default function ExpenseTable() {
  const { pathname } = useLocation();
  const { data, loading, error } = useQuery(FETCH_EXPENSES);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  if (loading) return <div>loading</div>;
  const expenses = data.findAllExpenses;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <DashboardBreadcrumbs pathname={pathname}>
        <Link className={classes.linkBtn}>Add expense</Link>
      </DashboardBreadcrumbs>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="expense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? expenses.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : expenses
            ).map((expense) => (
              <TableRow key={expense.name}>
                <TableCell>{expense.name}</TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  £{expense.price}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {expense.category}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {expense.desc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={expenses.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={PaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
