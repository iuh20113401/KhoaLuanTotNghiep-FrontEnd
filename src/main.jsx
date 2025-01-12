import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/image.css";
import "./styles/link.css";
import "./styles/sinhVienNav.css";
import "./styles/StyledDiv.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
