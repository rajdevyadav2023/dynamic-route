import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <h1>Jai Shree Ganesh</h1>
      <h1>Jai Shree Ganesh</h1>

      <Routes>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
