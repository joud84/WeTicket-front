import { Outlet } from "react-router";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function ClientLayout() {
  return (
    // section: يضم الشاشة بالكامل ومقسمها يمين ويسار
    <section style={{ display: "flex", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      
      <Sidebar />

      {/* main: المحتوى الأساسي اللي يتغير */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Header />
        
        {/* هنا بتنعرض صفحة الداشبورد */}
        <section style={{ marginTop: "20px" }}>
          <Outlet />
        </section>
      </main>

    </section>
  );
}