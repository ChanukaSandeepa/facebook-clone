import React, { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Widgets from './components/Widgets';
import Login from './components/Login';
import AppContext, { useAppContext } from './config/AppContext';

function App() {

  const [login, setLogin] = useState(true)
  // const [{ user } , dispatch] = useAppContext()
  useEffect(() => {
      document.title = "Facebook"
      const name = "Chanuka sandeepa"
      const rt = name.replace("s","f")
      console.log(rt)
  },[])

    // useEffect(() => {
    //   if(user){
    //     setLogin(true)
    //   }
    // },[user])
  
  return (
    <AppContext>
        <div className="app">
      {!login ? <Login/> : (
        <>
        <Header/>
          <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        </>
      )}
    </div> 
    </AppContext>
    
  );
}

export default App;
