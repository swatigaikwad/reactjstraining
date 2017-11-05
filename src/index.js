import React from 'react'; //Includes React Library
import ReactDOM from 'react-dom'; // Includes React DOM library
import './index.css';
//App is just the name to export the particular component
// ./App is the location
import App from './App'; 
import registerServiceWorker from './registerServiceWorker';

const userData = {
    name: "JOE",
    hobbies: [
        "reading", "playing", "swimming"
    ]
}
ReactDOM.render(<App user={userData} />, document.getElementById('root'));

registerServiceWorker(); // This function helps live reload of the module on the browser
