import './styles/App.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./utils/router";
import {useEffect} from "react";
import {basketActions} from "./utils/basketReducer";
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "./utils/appReducer";
import {AppRootStateType} from "./utils/store";


function App() {

    const dispatch = useDispatch();
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    useEffect(() => {

        let basketLS = localStorage.getItem('ids')
        if (basketLS) {
            let basket = JSON.parse(basketLS);
            dispatch(basketActions.setBasketItems(basket));
        }
        dispatch(appActions.setIsInitialized({isInitialized: true}))
    },[dispatch])

    if (!isInitialized) {
        return <div>loading...</div>
    }

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;