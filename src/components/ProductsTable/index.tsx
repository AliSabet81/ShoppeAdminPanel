import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useCallback, useEffect, useState } from "react";
import { GetProductsService } from "../../api/services/product";
import { Link } from "react-router-dom";
import EditProductModal from "../EditProductModal";
// interface Column {
//   id: "name" | "img" | "price" | "count" | "edit";
//   label: string;
//   minWidth?: number;
//   align?: "right";
// }
interface Column {
  id: "name" | "price" | "count" | "category";
  label: string;
  minWidth?: number;
  align?: "right";
}
const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "price",
    label: "price",
    minWidth: 170,
  },
  {
    id: "category",
    label: "category",
    minWidth: 170,
  },
  {
    id: "count",
    label: "count",
    minWidth: 170,
  },
];

const ProductTable = () => {
  const [productsList, setProductsList] = useState<[]>([]);
  const fetchProductsList = useCallback(async () => {
    const res = await GetProductsService();
    setProductsList(res.data);
  }, []);
  useEffect(() => {
    fetchProductsList();
  }, []);
  console.log(productsList);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

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
      <TableContainer sx={{ height: 504 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            <TableCell style={{ top: 57, minWidth: 170 }}>{"img"}</TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell key={"1"} style={{ top: 57, minWidth: 170 }}>
              {"edit"}
              {/* {column.label} */}
            </TableCell>
          </TableRow>
          <TableBody>
            {productsList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>
                      <img
                        className="h-20 w-20"
                        src={`http://localhost:3000${row.img}`}
                        alt=""
                      />
                    </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <EditProductModal
                        img={`http://localhost:3000${row.img}`}
                        id={row._id}
                        onSubmit={fetchProductsList}
                        name={row.name}
                        price={row.price}
                        count={row.count}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 8, 16, 24]}
        component="div"
        count={productsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProductTable;
