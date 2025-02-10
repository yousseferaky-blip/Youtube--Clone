import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { VideoProvider } from './Context/VideoContext'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <VideoProvider> 
      <App />
    </VideoProvider>
  </BrowserRouter>
);
