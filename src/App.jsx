import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import EnviarPage from "./pages/EnviarPage"
import RecargarPage from "./pages/RecargarPage"
import CarteraPage from "./pages/CarteraPage"
import MovimientosPage from "./pages/MovimientosPage"
import AyudaPage from "./pages/AyudaPage"
import "./index.css"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/enviar" element={<EnviarPage />} />
          <Route path="/recargar" element={<RecargarPage />} />
          <Route path="/cartera" element={<CarteraPage />} />
          <Route path="/movimientos" element={<MovimientosPage />} />
          <Route path="/ayuda" element={<AyudaPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

