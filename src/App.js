import React from 'react';


import './App.css';
import BiddingGraphComponent from "./BiddingGraph";
import HandDescriptionForm from "./HandDescriptionForm"


function App() {
    return (
        <div>
            <div className="App">
                <BiddingGraphComponent/>
            </div>
            <div>
                <HandDescriptionForm/>
            </div>
        </div>
    );
}


export default App;
