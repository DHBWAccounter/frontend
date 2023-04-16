import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="booking/:id" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
