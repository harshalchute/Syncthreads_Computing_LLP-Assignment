import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'
import MapView from './Components/Map_View'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/map_view/:mapId' element={<MapView />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
