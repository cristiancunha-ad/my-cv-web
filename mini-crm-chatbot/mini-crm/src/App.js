import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CRMData from './components/CRMData';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <CRMData />
      <Chatbot />
    </div>
  );
}

export default App;
