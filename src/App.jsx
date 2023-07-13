import { Routes, Route } from "react-router-dom"

// pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Folder from "./pages/Folder"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  )
}

export default App
