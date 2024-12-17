import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/styles.css';  
import App from './App';       

// Create the root of the app and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);