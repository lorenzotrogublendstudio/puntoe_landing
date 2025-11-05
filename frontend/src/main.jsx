import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import './no-shadows.css';
import './compact-spacing.css';
import './brand-red.css';
import './fixes.css'
import './tablet-landscape.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);