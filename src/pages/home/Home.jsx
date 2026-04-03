import { useState } from "react";
import { useNavigate, Link } from "react-router"; 
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css"; 

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("الرجاء تعبئة جميع الحقول!");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمات المرور غير متطابقة، يرجى التأكد منها!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "fake-token-new-user");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <main className={styles["register-container"]}>
      <section className={styles["register-box"]}>
        <h2>إنشاء حساب جديد</h2>
        <p>يسعدنا انضمامك إلى نظام WeTicket لإدارة الفعاليات</p>
        
        <form onSubmit={handleRegister}>
          <Input label="الاسم الكامل" type="text" placeholder="أدخل اسمك الكامل" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="البريد الإلكتروني" type="email" placeholder="أدخل البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="كلمة المرور" type="password" placeholder="أدخل كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input label="تأكيد كلمة المرور" type="password" placeholder="أعد إدخال كلمة المرور" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          {error && <p className={styles["error-message"]}>{error}</p>}

          <Button type="submit" loading={loading} variant="primary">
            إنشاء حساب
          </Button>
        </form>

        <p className={styles["login-link"]}>
          لديك حساب بالفعل؟ <Link to="/">تسجيل الدخول</Link>
        </p>
      </section>
    </main>
  );
}