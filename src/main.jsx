import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageDashboard from "./Latihan/pages/PageDashboard.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageDashboard />
  </StrictMode>,
);
