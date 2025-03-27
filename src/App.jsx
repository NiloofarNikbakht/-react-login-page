
// Import the needed component (css and jsx)
import React from 'react';
import Login from './Login.jsx';
import './index.css'; 

function App() {
  
  
  return (

    <div className="app">
      {/*  Embed the Login component within the App: */}
      <Login />  
    </div>

  );
}

export default App;
