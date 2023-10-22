import { Route, Routes } from "react-router-dom";

// All pages path here
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import APITools from "./pages/APITools/APITools";
import Pricing from "./pages/Pricing/Pricing";

// User pages path here
import Register from "./pages/User/Register/Register";
import Login from "./pages/User/Login/Login";
import UserDashboard from "./pages/User/UserDashboard/UserDashboard";
import OTP from "./pages/User/OTP/OTP";
import ForgotPassword from "./pages/User/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/User/ChangePassword/ChangePassword";

// Admin pages path here
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminPlan from "./pages/Admin/AdminPlan/AdminPlan";
import CreatePlan from "./pages/Admin/AdminPlan/CreatePlan";
import UpdatePlan from "./pages/Admin/AdminPlan/UpdatePlan";
import UserPlan from "./pages/User/UserPlan/UserPlan";
import AdminApikeys from "./pages/Admin/AdminApiKeys/AdminApikeys";
import CreateAdminApi from "./pages/Admin/AdminApiKeys/CreateAdminApi";
import UpdateApiKeys from "./pages/Admin/AdminApiKeys/UpdateApiKeys";

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
        <Route path="/user/" element={<UserDashboard />} />
        <Route path="/user/plan" element={<UserPlan />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/otp" element={<OTP />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/change-password" element={<ChangePassword />} />

        {/* admin panel routes herer  */}
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/plans" element={<AdminPlan />} />
        <Route path="/admin/plan/add" element={<CreatePlan />} />
        <Route path="/admin/plan/edit/:id" element={<UpdatePlan />} />
        <Route path="/admin/api-keys" element={<AdminApikeys />} />
        <Route path="/admin/api-key/add" element={<CreateAdminApi />} />
        <Route path="/admin/api-key/edit/:id" element={<UpdateApiKeys />} />
      </Routes>
    </>
  );
}

export default App;
