import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Make sure to replace '<repository-name>' with your actual repository name
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/reactportfolio"> {/* Added basename for GitHub Pages */}
    <App />
  </BrowserRouter>
);
