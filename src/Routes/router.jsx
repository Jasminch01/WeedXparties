import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";
import Details from "../Components/Details/Details";
import Login from "../Components/LogIn/Login";
import Register from "../Components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Contact from "../Components/Contact/Contact";

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
                element : <PrivetRoute> <Contact></Contact> </PrivetRoute>
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