import { useState } from "react";
import { useNavigate, Link } from "react-router"; 
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css"; 
import loginImage from '../../assets/card-login.png'; // استيراد صورة الفيقما

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
    <main className={styles.loginPage}>
      
      {/* القسم اليسار: الفورم والنصوص حقتكم */}
      <section className={styles.formSection}>
        <h1 className={styles.title}>مرحباً !</h1>
        <p className={styles.subtitle}>الملف الشخصي</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <Input label="البريد الإلكتروني" type="email" placeholder="أدخل إيميلك هنا" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="كلمة المرور" type="password" placeholder="أدخل كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          {error && <p className={styles.errorMessage}>{error}</p>}
          
          {/* استخدمنا زركم المخصص */}
          <Button type="submit" loading={loading} variant="primary">تسجيل الدخول</Button>
          
          <p className={styles.registerLink}>
            ليس لديك حساب؟ <Link to="/home">إنشاء حساب جديد</Link>
          </p>
        </form>
      </section>

      {/* القسم اليمين: الصورة الكبيرة */}
      <figure className={styles.imageSection}>
        <img src={loginImage} alt="WeTicket Event" className={styles.heroImage} />
      </figure>

    </main>
  );
}