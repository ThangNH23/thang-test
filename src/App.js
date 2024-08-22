import './App.css';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
