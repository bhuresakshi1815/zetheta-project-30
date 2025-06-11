// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // ✅ Make sure routes.js exports AppRoutes

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
