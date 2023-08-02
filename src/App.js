import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registrartion from "./components/Registrartion";
import Profile from "./components/users/Profile";
import Products from "./components/users/Products";
import MedicineDisplay from "./components/users/MedicineDisplay";
import Orders from "./components/users/Orders";
import Cart from "./components/users/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import AddMedicine from "./components/admin/AdminAddMedicine";
import NotFound from "./components/NotFound";
import CustomerList from "./components/admin/CustomerList";
import AdminOrders from "./components/admin/AdminOrders";

// {path:"/admindashboard", element:<AdminDashboard />},
// {path:"/adminorders", element:<AdminOrders />},
// {path:"/customer", element:<CustomerList />},
// {path:"/medicine", element:<Medicine />},

function App() {
  // const {id} = localStorage.getItem("UserId")
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mycart" element={<Cart />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/addMedicine" element={<AddMedicine />} />
        <Route exact path="/customer" element={<CustomerList />} />
        <Route exact path="/orderList" element={<AdminOrders />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registrartion />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<MedicineDisplay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
