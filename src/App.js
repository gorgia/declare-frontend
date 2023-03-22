import React from 'react';
import CytoscapeGraph from './CytoscapeGraph'
import './App.css';
import BiddingGraphComponent from "./BiddingGraph";


function App() {
    return (
        <div className="root" id="root">
            <div>
                <CytoscapeGraph/>
            </div>
        </div>
    );
}


export default App;
