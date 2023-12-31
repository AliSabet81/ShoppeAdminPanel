import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useCallback, useEffect, useState } from "react";
import { DeleteUserService, GetUsersService } from "../../api/services/users";
import { Button } from "@mui/material";
interface Column {
  id: "firstname" | "lastname" | "email" | "_id";
  label: string;
  minWidth?: number;
  align?: "right";
}
const columns: Column[] = [
  { id: "firstname", label: "firstname", minWidth: 170 },
  {
    id: "lastname",
    label: "lastname",
    minWidth: 170,
  },
  {
    id: "email",
    label: "email",
    minWidth: 170,
  },
  {
    id: "_id",
    label: "id",
    minWidth: 170,
  },
];

const ProductTable = () => {
  const [UsersLists, setUsersLists] = useState<[]>([]);

  const fetchUsersList = useCallback(async () => {
    const res = await GetUsersService();
    setUsersLists(res.data);
  }, []);
  useEffect(() => {
    fetchUsersList();
  }, []);
  console.log(UsersLists);
  const handleDelete = async (id: string) => {
    await DeleteUserService(id)
    fetchUsersList();
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ height: 470 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell style={{ top: 57, minWidth: 170 }}>{"delete"}</TableCell>
          </TableRow>
          <TableBody>
            {UsersLists.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Button onClick={() => handleDelete(row._id)}>
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 18, 24]}
        component="div"
        count={UsersLists.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProductTable;
