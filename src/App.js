import logo from './logo.svg';
import React from 'react';


import './App.css';
import BiddingBox from "./BiddingBox";
import BiddingGraphComponent from "./BiddingGraph";


function App() {
  return (

    <div className="App">
      <BiddingBox show={true}/>
        <BiddingGraphComponent/>
    </div>
  );
}


export default App;
