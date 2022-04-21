import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Card from './components/Card';
import { Link } from 'react-router-dom'

let id=window.location.pathname.split('/')[2];
let path = window.location.pathname;
function App() {
  return (
     <BrowserRouter>
        <div className="App">
            { path === '/' ? <Link to='/users'>Users</Link> : null}
            <Routes>
              <Route path='/users' element={<Users />}/>
              <Route path={`/users/${id}`} element={<Card/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
