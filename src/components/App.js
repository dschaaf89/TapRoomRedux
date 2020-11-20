import React from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer"
import KegControl from './KegControl';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <KegControl />
      <div id="footer">
          <Footer />
        </div>
    </React.Fragment>
  
  );
 
}

export default App;
