import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Mail from './Mail';
import Sendmail from './Sendmail';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from "./StateProvider";


function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <Router>

      {
         !user? (
          <Login/>
        ):(

    <div className="App">
      <Header/>
      <div className="app__body">
      <Sidebar/>
          <Switch>
            <Route path="/Mail/:roomId">
               <Mail/>
            </Route>
            <Route path="/">
               <Home/>
            </Route>
          </Switch>
      </div>
      <Sendmail/>

    </div>
        )
      }
  </Router>
  );
}

export default App;
