import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {states, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import data, {updateNewText} from "./redux/state";



let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App data = {data} func = {states} updateNewText = {updateNewText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderEntireTree(states);

subscribe(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
