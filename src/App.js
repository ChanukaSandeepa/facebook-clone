import React, { useEffect } from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Widgets from './components/Widgets';

function App() {

  useEffect(() => {
      document.title = "Facebook"
  },[])
  
  return (
    <div className="app">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </div>
  );
}

export default App;
