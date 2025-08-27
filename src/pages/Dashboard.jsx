import SalesSummary from "./SalesSummary";
import SalesLast30Days from "./SalesLast30Days";
import SalesByProduct from "./SalesByProduct";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Tarjetas KPI */}
        <SalesSummary />

        {/* Gráficas lado a lado */}
        <div className="grid lg:grid-cols-2 gap-6">
          <SalesLast30Days />
          <SalesByProduct />
        </div>
      </div>
    </div>
  );
}

