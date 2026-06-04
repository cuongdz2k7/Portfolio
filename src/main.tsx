import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import App from "./App.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "#1C1C21",
        },
      }}
    />

    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
