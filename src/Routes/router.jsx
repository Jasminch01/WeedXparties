import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";
import Details from "../Components/Details/Details";
import Login from "../Components/LogIn/Login";
import Register from "../Components/Register/Register";

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
            },
            {
                path : '/details/:id',
                element : <Details></Details>,
                loader : ()=> fetch('data.json')
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