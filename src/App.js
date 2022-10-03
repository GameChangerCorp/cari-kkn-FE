import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import LoginRoute from './components/login/LoginRoute';


function App() {


  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' element={
            <LoginRoute>
              <LoginPage/>
            </LoginRoute>
            }/>
          <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>  
    </BrowserRouter>

  );
}

export default App;
