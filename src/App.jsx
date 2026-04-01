import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

import AuthLayout from "./layout/AuthLayout/AuthLayout";
import ClientLayout from "./layout/ClientLayout/ClientLayout";
// استيراد الحارس اللي سويناه
import Guard from "./components/Guard/Guard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* الشاشات المفتوحة للكل (تسجيل الدخول وإنشاء حساب) */}
        <Route element={<AuthLayout />}>
           <Route path="/" element={<Login />} />
           <Route path="/home" element={<Home />} />
        </Route>

        {/* الشاشات المحمية (لازم يكون مسجل دخول عشان يشوفها) */}
        <Route element={<Guard />}>
          <Route element={<ClientLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        {/* مسار حماية إضافي لو كتب رابط غلط */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}