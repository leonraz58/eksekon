import './styles/App.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./utils/router";


function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;