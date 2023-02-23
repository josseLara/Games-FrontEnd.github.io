import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './componets/Start';
import Home from './componets/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
