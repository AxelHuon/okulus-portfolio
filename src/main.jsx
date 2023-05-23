import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {LoadingProvider} from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <LoadingProvider>
            <App/>
        </LoadingProvider>
    </BrowserRouter>
)
