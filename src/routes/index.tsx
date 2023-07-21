import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Products from "../pages/products";
import Dashboard from "../pages/Dashboard";
import Custumers from "../pages/Customers";
import Orders from "../pages/Orders";
import AddProduct from "../pages/products/AddProduct";

export const ROUTES = {
    Dashboard:"/admin/dashboard",
    Custumers:"/admin/custumers",
    Orders:"/admin/orders",
    Products:"/admin/products",
    AddProduct:"/admin/products/add"
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
                path:ROUTES.Custumers,
                element:<Custumers/>
            },
            {
                path:ROUTES.Orders,
                element:<Orders/>
            },
            {
                path:ROUTES.AddProduct,
                element:<AddProduct/>
            }
        ]
    }
])