import ProductTable from "../../components/ProductsTable";
import { Button } from "@mui/material";
import { ROUTES } from "../../routes";
import EditProductModal from "../../components/EditProductModal";


const Products = () => {
  
  return (
    <div className="w-full h-screen flex flex-col gap-10 p-20 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">Products</h1>
        <Button href={ROUTES.AddProduct}>Add Product</Button>
      </div>
      <ProductTable />
      
    </div>
  );
};

export default Products;
