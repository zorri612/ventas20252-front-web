// Dashboard.jsx 
import "../styles/Dashboard.css";
import SalesSummary from "./SalesSummary";
import SalesLast30Days from "./SalesLast30Days";
import SalesByProduct from "./SalesByProduct";

export default function Dashboard() {
  const handleLogout = () => {
    // Redirige al login
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header con título y botón salir */}
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="logout-button" onClick={handleLogout}>
            Salir
          </button>
        </div>

        <SalesSummary />

        <div className="dashboard-graphs">
          <SalesLast30Days />
          <SalesByProduct />
        </div>
      </div>
    </div>
  );
}
