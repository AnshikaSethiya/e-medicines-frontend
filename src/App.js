import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Registrartion from './components/Registrartion';
import Profile from './components/users/Profile';
import Products from './components/users/Products';
import MedicineDisplay from './components/users/MedicineDisplay';
import Orders from './components/users/Orders';
import Cart from './components/users/Cart';
import Header from './components/users/Header';
import Home from './components/Home';
import AdminDashboard from './components/admin/AdminDashboard';


// {path:"/admindashboard", element:<AdminDashboard />},
// {path:"/adminorders", element:<AdminOrders />},
// {path:"/customer", element:<CustomerList />},
// {path:"/medicine", element:<Medicine />},

function App() {
  return (
    <div className="App"> 
             <Header />
              <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route exact path="/login" element={<Login />}/>
                  <Route exact path="/register" element={<Registrartion />}/>
                  <Route exact path="/products" element={<Products />}/>
                  <Route exact path="/product/:id" element={<MedicineDisplay />} />
                  <Route exact path="/orders" element={<Orders />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/mycart" element={<Cart/>} />
                  <Route exact path='/admindashboard' element={<AdminDashboard />} />
               </Routes>
            <Footer />
    </div>
  );
}

export default App;
