import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import ContactView from './pages/ContactView';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactView/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
