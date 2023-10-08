import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import ForgotPassword from "./pages/User/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/User/ChangePassword/ChangePassword";
import Dashboard from "./pages/User/Dashboard/Dashboard";
import OTP from "./pages/User/OTP/OTP";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminPlan from "./pages/Admin/AdminPlan/AdminPlan";
import CreatePlan from "./pages/Admin/AdminPlan/CreatePlan";
import UpdatePlan from "./pages/Admin/AdminPlan/UpdatePlan";
import APITools from "./pages/APITools/APITools";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  return (
    <>
      <Routes>
        {/* client routes here  */}
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/api-tools" element={<APITools />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* User routes herer  */}
        <Route path="/user/" element={<Dashboard />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/otp" element={<OTP />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/change-password" element={<ChangePassword />} />

        {/* admin panel routes herer  */}
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/plans" element={<AdminPlan />} />
        <Route path="/admin/plan/add" element={<CreatePlan />} />
        <Route path="/admin/plan/edit/:id" element={<UpdatePlan />} />
      </Routes>
    </>
  );
}

export default App;
