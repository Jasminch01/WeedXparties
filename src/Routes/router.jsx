import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path : '',
        element : <Layout></Layout>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/gallery',
                element : <Gallery></Gallery>
            },
            {
                path : '/services',
                element : <div></div>
            }
        ]
    }
])

export default router;