import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  // دالة تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("token"); // نحذف التوكن
    navigate("/"); // نرجعه لصفحة الدخول
  };

  return (
    // aside: يعني قائمة جانبية
    <aside style={{ width: "250px", background: "#fff", padding: "20px", height: "100vh" }}>
      <h2>WeTicket</h2>
      
      {/* nav: يعني قائمة تنقل */}
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", fontWeight: "bold" }}>لوحة التحكم</li>
          {/* روابط ثانية مستقبلاً */}
        </ul>
      </nav>

      <button 
        onClick={handleLogout} 
        style={{ marginTop: "50px", padding: "10px", width: "100%", background: "#ef4444", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        تسجيل الخروج
      </button>
    </aside>
  );
}