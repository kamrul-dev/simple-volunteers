import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Volunteers from './Components/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
