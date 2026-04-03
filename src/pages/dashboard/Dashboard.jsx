import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Dashboard.module.css"; 

export default function Dashboard() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
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
  }, []);

  if (!chartData) {
    return <p>جاري تحميل بيانات لوحة التحكم...</p>;
  }

  return (
    <section>
      <h2>نظرة عامة (مبدئية بانتظار التصميم)</h2>
      
      <section className={styles["charts-grid"]}>
        <article className={styles["chart-card"]}>
          <ReactApexChart options={chartData.bar.options} series={chartData.bar.series} type="bar" height={300} />
        </article>

        <article className={styles["chart-card"]}>
          <ReactApexChart options={chartData.line.options} series={chartData.line.series} type="line" height={300} />
        </article>
      </section>
      
    </section>
  );
}