import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", { email, password });
      console.log("Login exitoso:", res.data);

      alert("¡Bienvenido!");

      // Redirigir según el rol que devuelva el backend
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Error en el login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Correo
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-10 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-10 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="********"
                required
              />
            </div>
          </div>

          {error && <p className="error">{error}</p>}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Entrar"}
          </button>
        </form>

        <p className="register-link">
          ¿No tienes cuenta?{" "}
          <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
}