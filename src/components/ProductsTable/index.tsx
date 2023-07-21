import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "img" | "price" | "count" | "edit";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: Column[] = [
    { id: "img", label: "img", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 170 },
  {
    id: "price",
    label: "price",
    minWidth: 170,
  },
  {
    id: "count",
    label: "count",
    minWidth: 170,
  },
  {
    id: "edit",
    label: "edit",
    minWidth: 170,
  },
];

interface Data {
  name: string;
  img: string;
  price: number;
  count: number;
  edit: string;
}

function createData(
  name: string,
  img: string,
  price: number,
  count: number,
  edit:string
): Data {
  return { name, img, price, count, edit };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263 , 'edit'),
  createData("China", "CN", 1403500365, 9596961 , 'edit'),
  createData("Italy", "IT", 60483973, 301340 , 'edit'),
  createData("United States", "US", 327167434, 9833520 , 'edit'),
  createData("Canada", "CA", 37602103, 9984670 , 'edit'),
  createData("Australia", "AU", 25475400, 7692024 , 'edit'),
  createData("Germany", "DE", 83019200, 357578 , 'edit'),
  createData("Ireland", "IE", 4857000, 70273 , 'edit'),
  createData("Mexico", "MX", 126577691, 1972550 , 'edit'),
  createData("Japan", "JP", 126317000, 377973 , 'edit'),
  createData("France", "FR", 67022000, 640679 , 'edit'),
  createData("United Kingdom", "GB", 67545757, 242495 , 'edit'),
  createData("Russia", "RU", 146793744, 17098246 , 'edit'),
  createData("Nigeria", "NG", 200962417, 923768 , 'edit'),
  createData("Brazil", "BR", 210147125, 8515767 , 'edit'),
];
const ProductTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event: unknown, newPage: number) => {
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
      <TableContainer sx={{ height: 500 }}>
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
          </TableRow>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.img}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8, 16, 24]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProductTable;
