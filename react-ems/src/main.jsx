import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import AuthProvider from './context/AuthProvider.jsx';

localStorage.clear();
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>,
);
