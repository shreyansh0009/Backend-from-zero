import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EditUser from '../pages/EditUser';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
}

export default App;
