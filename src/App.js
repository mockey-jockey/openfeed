import React from 'react';
import Home from './component/home';
import Domain from './component/domain';
import Settings from './component/settings';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Domain />}></Route>
        <Route path='/admin' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
