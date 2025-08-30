// SalesSummary.jsx
import { useEffect, useState } from "react";

export default function SalesSummary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("https://ventas20252-back.vercel.app/api/reports/sales/summary")
      .then(res => res.json())
      .then(data => setSummary(data));
  }, []);

  if (!summary) return <p>Cargando...</p>;

  const cards = [
    { title: "Ventas Totales", value: summary.totalSales },
    { title: "Ingresos Totales", value: `$${summary.totalRevenue}` },
    { title: "Ventas últimos 30 días", value: summary.salesLast30Days },
    { title: "Ingresos últimos 30 días", value: `$${summary.revenueLast30Days}` },
  ];

  return (
    <div className="kpi-cards">
      {cards.map((card, i) => (
        <div key={i} className="kpi-card">
          <h3>{card.title}</h3>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
