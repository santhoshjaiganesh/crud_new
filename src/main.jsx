import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./Table/UserTable.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usertable" element={<UserTable />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <UserTable /> */}
  </StrictMode>
);
