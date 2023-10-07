import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Home/Error/Error";

const router = createBrowserRouter([
    {
        path : '',
        element : <Layout></Layout>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default router;