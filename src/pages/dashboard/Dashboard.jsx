import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export default function Dashboard() {
  // 1. حالة لتخزين بيانات الرسوم البيانية
  const [chartData, setChartData] = useState(null);

  // 2. استخدام useEffect لجلب البيانات أول ما تفتح الشاشة
  useEffect(() => {
    // محاكاة الاتصال بالسيرفر (تأخير بسيط)
    const fetchData = () => {
      const data = {
        bar: {
          options: {
            chart: { id: "sales-bar" },
            xaxis: { categories: ["يناير", "فبراير", "مارس", "أبريل", "مايو"] },
            title: { text: "إحصائيات التذاكر المباعة" }
          },
          series: [{ name: "التذاكر", data: [30, 40, 45, 50, 80] }]
        },
        line: {
          options: {
            chart: { id: "visitors-line" },
            xaxis: { categories: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] },
            title: { text: "عدد زوار الفعاليات" }
          },
          series: [{ name: "الزوار", data: [150, 200, 180, 250, 300] }]
        }
      };
      
      setChartData(data);
    };

    fetchData();
  }, []); // القوسين الفاضية تعني: نفذ هذا الكود مرة واحدة فقط عند فتح الشاشة

  // إذا كانت البيانات لسه ما تحملت
  if (!chartData) {
    return <p>جاري تحميل بيانات لوحة التحكم...</p>;
  }

  return (
    <section>
      <h2>نظرة عامة (مبدئية بانتظار التصميم)</h2>
      
      <section style={{ display: "flex", gap: "var(--spacing-md)", marginTop: "20px" }}>
        
        <article style={{ flex: 1, background: "white", padding: "20px", borderRadius: "var(--border-radius)", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <ReactApexChart options={chartData.bar.options} series={chartData.bar.series} type="bar" height={300} />
        </article>

        <article style={{ flex: 1, background: "white", padding: "20px", borderRadius: "var(--border-radius)", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <ReactApexChart options={chartData.line.options} series={chartData.line.series} type="line" height={300} />
        </article>

      </section>
    </section>
  );
}