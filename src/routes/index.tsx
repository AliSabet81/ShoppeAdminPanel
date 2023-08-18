import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Products from "../pages/products";
import Dashboard from "../pages/Dashboard";
import Custumers from "../pages/Customers";
import Orders from "../pages/Orders";
import AddProduct from "../pages/products/AddProduct";
import Blogs from "../pages/blogs";
import AddBlog from "../pages/blogs/AddBlog";

export const ROUTES = {
    Dashboard:"/admin/dashboard",
    Custumers:"/admin/custumers",
    Orders:"/admin/orders",
    Products:"/admin/products",
    AddProduct:"/admin/products/add",
    Blogs:"/admin/blogs",
    AddBlog:"/admin/blogs/add"
}

export const Router = createBrowserRouter([
    {
        path:"/admin",
        element:<Layout/>,
        children:[
            {
                path:ROUTES.Dashboard,
                element:<Dashboard/>
            },
            {
                path:ROUTES.Products,
                element:<Products/>
            },
            {
                path:ROUTES.AddProduct,
                element:<AddProduct/>
            },
            {
                path:ROUTES.Custumers,
                element:<Custumers/>
            },
            {
                path:ROUTES.Orders,
                element:<Orders/>
            },
            {
                path:ROUTES.Blogs,
                element:<Blogs/>
            },
            {
                path:ROUTES.AddBlog,
                element:<AddBlog/>
            }
        ]
    }
])