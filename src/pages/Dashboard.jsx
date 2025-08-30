// Dashboard.jsx
import "../styles/Dashboard.css";
import SalesSummary from "./SalesSummary";
import SalesLast30Days from "./SalesLast30Days";
import SalesByProduct from "./SalesByProduct";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <SalesSummary />

        <div className="dashboard-graphs">
          <SalesLast30Days />
          <SalesByProduct />
        </div>
      </div>
    </div>
  );
}
