import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>

    <div className="App">
      <div className="wrapper" id="main">
        <App />
      </div>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
