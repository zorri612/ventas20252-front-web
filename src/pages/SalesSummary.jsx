import { useEffect, useState } from "react";

export default function SalesSummary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/reports/sales/summary")
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center items-center hover:shadow-lg transition"
        >
          <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
          <p className="mt-2 text-2xl font-bold text-gray-800">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

