import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import App from './App';
import stores from './stores/index'
import { Provider } from 'react-redux'
import Login from './login'
import Sidebar from './components/Sidebar';
import { BrowserRouter ,Switch, Route } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={stores}>
            <App />
        </Provider> */}
        <BrowserRouter>
            <Switch>
                <Route index element={<Login />} />
                <Route  exact path="/login" element={<Login />} />
                <Route path="/sidebar" element={<Sidebar />} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

