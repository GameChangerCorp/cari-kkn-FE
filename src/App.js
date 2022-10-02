import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import Cookies from 'js-cookie';

function App() {
  const LoginRoute = (props) => {
    if(Cookies.get('token') !== undefined){
      return <Navigate to={'/'} />
    } else if(Cookies.get('token') === undefined) {
      return props.children
    }
  }


  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' element={
            <LoginPage/>
            }/>
          <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>  
    </BrowserRouter>

  );
}

export default App;
