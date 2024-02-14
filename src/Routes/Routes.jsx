import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Cart from "../pages/Dashboard/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";
import PrivetRoute from "./PrivetRoute";
import Allusers from "../pages/Dashboard/AllUsers/Allusers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItmes from "../pages/Dashboard/UpdateItms/UpdateItmes";
import Payments from "../pages/Dashboard/Payments/Payments";
import PaymentsHistory from "../pages/Dashboard/PaymentsHistory/PaymentsHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UaserHome/UserHome";
import Contact from "../pages/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }

        ]
    },
    {
        path: "dashboard",
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            //Users Routs

            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {

                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "mybooking",
                element: <MyBooking></MyBooking>
            },
            {
                path: "payments",
                element: <Payments></Payments>
            },
            {
                path: "paymentsHistory",
                element: <PaymentsHistory></PaymentsHistory>
            },

            //Admin Routes
            {
                path: "adminHome",
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: "allusers",
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: "additems",
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: "manageitems",
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: "updateItems/:id",
                element: <AdminRoutes><UpdateItmes></UpdateItmes></AdminRoutes>,
                loader: ({ params }) => fetch(`https://green-coffee-house-server.vercel.app/menu/${params.id}`)
            }
        ]
    }
]);