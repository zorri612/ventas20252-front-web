import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function SalesLast30Days() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ventas20252-back.vercel.app/api/reports/sales/last30days")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Ventas últimos 2 días</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="_id" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip contentStyle={{ backgroundColor: "#F9FAFB", borderRadius: "8px", border: "none" }} />
          <Line type="monotone" dataKey="totalRevenue" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
