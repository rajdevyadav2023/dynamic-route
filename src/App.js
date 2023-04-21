import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserDetails from './components/UserDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
   
     
     <Routes>
      <Route index element={<Home/>}/>
        <Route path='/users' element={<Home/>}/>
       
          <Route path='/users/:userId' element={<UserDetails/>} />
     </Routes>

    
    </div>
  );
}

export default App;
