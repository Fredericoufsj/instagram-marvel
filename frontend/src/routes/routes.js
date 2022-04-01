import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Logon from '../pages/Logon/';
import Feed from '../pages/Feed/index';


export default function Rotas(){

  return (

    
    <Router>
      <Routes>
          <Route path="/" exact element={<Logon />}></Route>
          <Route path="/feed" element={<Feed />}></Route>          
       </Routes>
       </Router>
    
  )
}

