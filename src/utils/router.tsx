import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Layout} from "../layout/layout";
import {Chairs} from "../layout/chairs/chairs";
import {Main} from "../layout/main/main";
import {Tests} from "../layout/tests/tests";
import {ChairPage} from "../layout/chairs/chairPage/chairPage";
import {Cart} from "../layout/cart/cart";

const publicRoutes: RouteObject[] = [
    {
        element: <Main/>  ,
        path: '/',
    },
    {
        element: <Chairs/>,
        path: '/chairs',
    },
    {
        element: <Tests/>,
        path: '/tests',
    },
    {
        element: <ChairPage/>,
        path: '/chairs/:chairId',
    },
    {
        element: <Cart/>,
        path: '/cart',
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