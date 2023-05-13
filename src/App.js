import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/employee" element={<HomePage />} />
        {/* <Route path="/employee" element={<EmployeePage />} /> */}
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}
