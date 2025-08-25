import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get("http://localhost:4000/api/ventas/dashboard");
      setStats(res.data);
    };
    fetchStats();
  }, []);

  if (!stats) return <p className="text-center">Cargando...</p>;

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Tarjetas */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold">Total Ventas</h2>
          <p className="text-2xl">{stats.totalVentas}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold">Ingresos</h2>
          <p className="text-2xl">${stats.ingresosTotales}</p>
        </CardContent>
      </Card>

      {/* Gráfico de ventas por mes */}
      <Card className="col-span-3">
        <CardContent className="p-6 h-80">
          <h2 className="text-xl font-bold mb-4">Ventas por mes</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.ventasPorMes}>
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
