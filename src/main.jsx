import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageLogin from "./Latihan/pages/PageLogin.jsx";
import PageRegister from "./Latihan/pages/PageRegister.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageRegister />
  </StrictMode>,
);
