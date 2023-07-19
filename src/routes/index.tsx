import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Products from "../pages/products";
import Dashboard from "../pages/Dashboard";

export const ROUTES = {
    Dashboard:"/dashboard",
    Products:"/products"
}

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:ROUTES.Dashboard,
                element:<Dashboard/>
            },
            {
                path:ROUTES.Products,
                element:<Products/>
            }
        ]
    }
])