import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";
import Details from "../Components/Details/Details";
import Login from "../Components/LogIn/Login";
import Register from "../Components/Register/Register";
import PrivetRoute from "./PrivetRoute";

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
                element : <PrivetRoute> <Gallery></Gallery></PrivetRoute>
            },
            {
                path : '/contact',
                element : <div></div>
            },
            {
                path : '/details/:id',
                element : <PrivetRoute> <Details></Details> </PrivetRoute>,
                loader : ()=> fetch('/data.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default router;