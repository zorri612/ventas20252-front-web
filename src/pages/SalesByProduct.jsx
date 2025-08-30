import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function SalesByProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ventas20252-back.vercel.app/api/reports/sales/by-product")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Ventas por producto</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="totalRevenue"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "#F9FAFB", borderRadius: "8px", border: "none" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
