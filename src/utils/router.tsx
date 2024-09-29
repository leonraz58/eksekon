import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Layout} from "../layout/layout";
import {Chairs} from "../layout/chairs/chairs";

const publicRoutes: RouteObject[] = [
    {
        element: <div>main page</div>,
        path: '/',
    },
    {
        element: <div><Chairs/></div>,
        path: '/chairs',
    }
]

export const router = createBrowserRouter([
    {
        children: [
            ...publicRoutes,
        ],
        element: <Layout/>,
        //errorElement: <PageNotFound />,
        path: '/',
    },
])