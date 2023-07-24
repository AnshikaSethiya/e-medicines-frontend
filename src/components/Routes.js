import Login from "./Login";
import Registrartion from "./Registrartion";
import Cart from "./users/Cart"
import Profile from "./users/Profile";
import Orders from "./users/Orders"
import Dashboard from "./users/Products";
import MedicineDisplay from "./users/MedicineDisplay"
import AdminDashboard from "./admin/AdminDashboard"
import AdminOrders from "./admin/AdminOrders"
import CustomerList from "./admin/CustomerList"
import Medicine from "./admin/Medicine"

export const routes = [
  {path:"/", element:<Login/>},
  {path:"/register", element:<Registrartion/>},
  {path:"/mycart", element:<Cart />},
  {path:"/profile", element:<Profile/>},
  {path:"/orders", element:<Orders />},
  {path:"/products", element:<Dashboard />},
  {path:"/product/:id", element:<MedicineDisplay />},

  {path:"/admindashboard", element:<AdminDashboard />},
  {path:"/adminorders", element:<AdminOrders />},
  {path:"/customer", element:<CustomerList />},
  {path:"/medicine", element:<Medicine />},
]