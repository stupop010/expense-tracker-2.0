import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
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
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import PaginationActions from "./PaginationActions";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";
import Modal from "../Modal";
import DeleteExpenseActions from "./DeleteEpenseActions";
import useStyles from "./ExpenseTableStyles";

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($id: Int!) {
    deleteExpense(id: $id)
  }
`;

const ExpenseTable = ({ expenses, deleteContextExpense }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);
  const { pathname } = useLocation();
  const classes = useStyles();

  const [deleteExpense, { loading }] = useMutation(DELETE_EXPENSE);

  if (loading) return <div>loading</div>;

  const handleModalOpen = (id) => {
    setCurrentExpense(id);
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleDeleteExpense = async () => {
    try {
      // await deleteExpense({ variables: { id: currentExpense } });
      deleteContextExpense(currentExpense);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={classes.root}>
      <DashboardBreadcrumbs pathname={pathname}>
        <Link className={classes.linkBtn} to="/dashboard/add-expense">
          <AddCircleOutlineOutlinedIcon /> <span>Add Expense</span>
        </Link>
      </DashboardBreadcrumbs>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="expense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Actions</TableCell>
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
                <TableCell align="right">
                  <EditIcon
                    className={classes.iconHover}
                    onClick={handleModalOpen}
                  />
                  <DeleteIcon
                    className={classes.iconHover}
                    onClick={() => handleModalOpen(expense.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
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
      <Modal
        open={open}
        handleClose={handleModalClose}
        title="Confirm to delete"
        actions={
          <DeleteExpenseActions
            confirm={handleDeleteExpense}
            cancel={handleModalClose}
            id={currentExpense}
          />
        }
        styles={{ width: "350px" }}
      />
    </main>
  );
};

export default ExpenseTable;
