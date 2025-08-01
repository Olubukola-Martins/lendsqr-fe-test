import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />{" "}
    </ErrorBoundary>
  </StrictMode>
);
