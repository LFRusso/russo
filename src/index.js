import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Layout/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    
    <div className="App">
      <div className="wrapper" id="main">
        <App />
      </div>
      <Footer />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
