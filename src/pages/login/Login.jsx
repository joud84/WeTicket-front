import { useState } from "react";
import { useNavigate, Link } from "react-router"; 
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    setError("");

    if (!email || !password) {
      setError("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "fake-token-123");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    // main: المحتوى الأساسي للصفحة بالكامل
    <main className="login-container">
      
      // section: قسم مربع تسجيل الدخول
      <section className="login-box">
        <h2>تسجيل الدخول - WeTicket</h2>
        <p>مرحباً بك مجدداً في نظام إدارة الفعاليات</p>
        
        <form onSubmit={handleLogin}>
          <Input 
            label="البريد الإلكتروني"
            type="email"
            placeholder="أدخل إيميلك هنا"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input 
            label="كلمة المرور"
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* p: فقرة نصية لعرض الخطأ */}
          {error && <p className="error-message">{error}</p>}

          <Button type="submit" loading={loading} variant="primary">
            دخول
          </Button>
        </form>

        {/* p: فقرة نصية لرابط التسجيل */}
        <p className="register-link">
          ليس لديك حساب؟ <Link to="/home">إنشاء حساب جديد</Link>
        </p>

      </section>
    </main>
  );
}