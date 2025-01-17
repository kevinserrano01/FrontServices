import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./Layout";
import { NotFound } from "./components/NotFound";
import { ServicesList } from "./components/services/ServicesList";
import { ServiceDetails } from "./components/services/ServiceDetails";

//LOGIN
import Login from "./components/Auth/Login";
//Register
import Register from "./components/Auth/Register";
//Create Service
import AddServices from "./components/Create/ServiceCreate";



export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                children: [
                    {
                        index: true,
                        element: <ServicesList />
                    },
                    {
                        path: ":idService",
                        element: <ServiceDetails />
                    },
                    {
                        path: "addService",
                        // element: <AddServices />
                    }
                ],
            },
            {
                path: "/requests",
                children: [
                    {
                        index: true,
                        // element: <Requets />
                    },
                    {
                        path: ":idService",
                        // element: <ServicesDetails />
                    },
                    {
                        path: "addService",
                        element: <AddServices />
                    }
                ],
            },
            {
                path: "/posts",
                children: [
                    {
                        index: true,
                        // element: <Posts />
                    },
                    {
                        path: ":idPost",
                        // element: <PostsDetails />
                    }
                ],
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "*",
                element: <NotFound />
            },
            {
                path: "/profile",
                children: [
                    {
                        index: true,
                        // element: <UserProfile />
                    },
                    {
                        path: "edit",
                        // element: <UserEdit />
                    }
                ]
            }
        ]
    }
]);