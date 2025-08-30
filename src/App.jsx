import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas principales de la app */}
        <Route path="/*" element={<AppRouter />} />
        <Route path="/register" element={<AppRouter />} />

        {/* Ruta específica del admin dashboard */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
