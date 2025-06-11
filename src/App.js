import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
  <Route path="/" element={
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is now coming directly from App.js</p>
    </div>
    } />
  </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;