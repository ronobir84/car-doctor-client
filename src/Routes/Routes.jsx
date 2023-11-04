import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookService from "../Pages/BookService/BookService";
import Services from "../Pages/Home/Services/Services";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/bookings",
                element : <Bookings></Bookings>
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/srevices/${params.id}`)
            },
            {
                path: "book/:id",
                element: <BookService></BookService>,
                loader: ({ params }) => fetch(`http://localhost:5000/srevices/${params.id}`)
            }
        ]
    },
]);
export default router