import { Button } from "@mui/material";
import { ROUTES } from "../../routes";
import EditProductModal from "../../components/EditProductModal";
import BlogsTable from "../../components/BlogsTable";


const Blogs = () => {
  
  return (
    <div className="w-full h-screen flex flex-col gap-10 p-20 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">Blogs</h1>
        <Button href={ROUTES.AddBlog}>Add Blog</Button>
      </div>
      <BlogsTable />
      
    </div>
  );
};

export default Blogs;
