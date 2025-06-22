import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
// import MyURLsPage from './Pages/User/MyURLsPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
// import URLShortener from './Pages/URLShortener/URLShortener';
// import ProfilePage from './Pages/User/Profile';

function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
  )
}

export default App
