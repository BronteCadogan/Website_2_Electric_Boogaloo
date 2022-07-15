import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";
import './index.css';
import App from './App';



constructor(props) {
  super(props);
  this.state = {
    isLoaded: false,
  }
}

componentDidMount() {
  // wait until the data is loaded, then set isLoaded to true
  window.addEventListener("someevent", function() {
    this.setState({isLoaded: true});
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


