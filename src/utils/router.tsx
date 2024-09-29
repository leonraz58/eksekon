import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Layout} from "../layout/layout";
import {Chairs} from "../layout/chairs/chairs";
import {Main} from "../layout/main/main";

const publicRoutes: RouteObject[] = [
    {
        element: <Main/>  ,
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