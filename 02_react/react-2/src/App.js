import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Form/>
    </div>
  );
}

export default App;
