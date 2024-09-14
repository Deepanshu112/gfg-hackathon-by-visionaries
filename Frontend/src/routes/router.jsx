import {createBrowserRouter} from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import { Instructors } from "../pages/Instructors/instructors";
import Home from "../pages/Home/Home"
import Classes from "../pages/Classes/Classes";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import SingleClass from "../pages/Classes/SingleClass";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "instructors",
                element: <Instructors />
            },
            {
                path: "classes",
                element: <Classes />
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/class/:id",
                element: <SingleClass/>,
                loader: () => fetch(`http://localhost:5000/class/${params.id}`)
            }
        ]
    },
    
]);