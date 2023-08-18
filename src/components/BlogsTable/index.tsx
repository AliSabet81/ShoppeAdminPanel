import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DeleteBlogService, GetBlogsService } from "../../api/services/blog";
interface Column {
  id: "title" | "author" | "category" | "date";
  label: string;
  minWidth?: number;
  align?: "right";
}
const columns: Column[] = [
  { id: "title", label: "title", minWidth: 170 },
  {
    id: "author",
    label: "author",
    minWidth: 170,
  },
  {
    id: "category",
    label: "category",
    minWidth: 170,
  },
  {
    id: "date",
    label: "date",
    minWidth: 170,
  },
];

const BlogsTable = () => {
  const [blogs, setBlogsList] = useState<[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const fetchBlogsList = useCallback(async () => {
    const res = await GetBlogsService({
      pageNumber: page + 1,
      pageSize: rowsPerPage,
    });
    setBlogsList(res.data);
  }, [rowsPerPage, page]);
  useEffect(() => {
    fetchBlogsList();
  }, [rowsPerPage, page]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };
  const handleDelete = async (id: string) => {
    await DeleteBlogService(id);
    fetchBlogsList();
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
            </TableCell>
          </TableRow>
          <TableBody>
            {blogs.map((row: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell>
                    <img
                      className="h-20 w-20"
                      src={`http://localhost:3333${row.img}`}
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
        rowsPerPageOptions={[4, 8, 16, 24]}
        component="div"
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default BlogsTable;