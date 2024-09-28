import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Layout} from "../layout/layout";

const publicRoutes: RouteObject[] = [
    {
        element: <div>123</div>,
        path: '/',
    },
    {
        element: <div>345</div>,
        path: '/1',
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