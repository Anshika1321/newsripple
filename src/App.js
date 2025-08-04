import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import ScrollButton from './components/ScrollButton';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<News key="general" category="general" apiKey={apiKey} />} />
          <Route path="/business" element={<News key="business" category="business" apiKey={apiKey} />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" apiKey={apiKey} />} />
          <Route path="/health" element={<News key="health" category="health" apiKey={apiKey} />} />
          <Route path="/science" element={<News key="science" category="science" apiKey={apiKey} />} />
          <Route path="/sports" element={<News key="sports" category="sports" apiKey={apiKey} />} />
          <Route path="/technology" element={<News key="technology" category="technology" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;